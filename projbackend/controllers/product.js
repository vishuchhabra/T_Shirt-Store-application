const Product = require('../models/product')
const fs = require('fs')
const formidable = require("formidable")
const _ = require('lodash')  //lodash for easy methods in java script
const { sortBy } = require('lodash')
exports.getProductById =(req, res, next,id)=>
{
   Product.findById(id)
   .populate("category") //populate product based on category
   .exec((err,product)=>
   {
       if(err)
        {
         return res.status(400).json({
             error:"Product not found"
        })
       }
       req.product = product
       next()
   })   
}

exports.createProduct = (req, res)=>
{
   let form = new formidable.IncomingForm()
   form.keepExtensions = true

   form.parse(req, (err, fields ,file)=>
   {
       if(err){
           return res.status(400).json({
               error:"Problem with image"
           })
       }
       
       //fileds destrucutres
       const {price,name,description,category,stock} = fields
       
       if(!name || !description || !price || !category || !stock){
          return res.status(400).json({
              error:"Please include all fields"
          })
       }
       
       let product = new Product(fields)
       //handle files here
       if(file.photo)
       {
           if(file.photo.size > 3000000)
           {
               return res.status(400).json({
                   error:"File size too big!"
               })
           }
           //it will give the path of the photo
           //console.log(file.photo.path) 
           product.photo.data = fs.readFileSync(file.photo.path)
           //console.group(file.photo.type)  it will print the type of file 
           product.photo.contentType= file.photo.type //path will the path and type will  give the type 
       }
       //save to the database
       product.save((err, product)=>
       {
           if(err)
           return res.status(400).json({
               error:"Saving T-shirt in DB failed"
           })
           res.json(product)
       })
   })
}


exports.getProduct = (req, res)=>
{
    req.product.photo = undefined //it can not be server as json
    return res.json(req.product)
}

//middlleware 
exports.photo =(req, res,next)=>
{
    if(req.product.photo.data) //if data present
    {
       res.set("Content-Type",req.product.photo.contentType) //setting the header Content-Type with content type of images
       return  res.send(req.send.photo.data)
       next()
    }
}


//delete
exports.deleteProduct = (req, res)=>
{
    let product = req.product
    product.remove((err, deletedP)=>
    {
        if(err){
        return res.status(400).json({
            error:"Failed to  delete the product"
        })
        }
        res.json({
            message:"Deletion was a Success",
            deleteProduct
        }) 
    })
}

//update
exports.updateProduct =(req,res)=>
{

    let form = new formidable.IncomingForm()
   form.keepExtensions = true

   form.parse(req, (err, fields ,file)=>
   {
       if(err){
           return res.status(400).json({
               error:"Problem with image"
           })
       }
       
       //fileds destrucutres
       const {price,name,description,category,stock} = fields
        
       let product = req.product
       product = _.extend(product,fields) //updating the product with fields using lodash

       //handle files here
       if(file.photo)
       {
           if(file.photo.size > 3000000)
           {
               return res.status(400).json({
                   error:"File size too big!"
               })
           }
           //it will give the path of the photo
           //console.log(file.photo.path) 
           product.photo.data = fs.readFileSync(file.photo.path)
           //console.group(file.photo.type)  it will print the type of file 
           product.photo.contentType= file.photo.type //path will the path and type will  give the type 
       }
       //save to the database
       product.save((err, product)=>
       {
           if(err)
           return res.status(400).json({
               error:"Updating T-shirt in DB failed"
           })
           res.json(product)
       })
   })
}

//listening the product
exports.getAllProducts =(req, res)=>
{
   
   let limit = req.query.limit ? parseInt(req.query.limit): 8
   let sortBy = req.query.sortBy ? req.query.sortBy : "_id" //default taking id
   Product.find()
   .select("-photo")    //for selecting some  - negative sign show the photo  should not select
   .populate("category")
   .sort([[sortBy ,"asc"]])  //asc for ascending
   .limit(limit)
   .exec((err, products)=>
   {
       if(err)
       return res.status(400).json({
           message:"No Product Found"
       })
       res.json(products)
   })
}

//middleware
exports.updateStock =(req, res, next)=>
{
    let myOperations = req.body.order.products.map(prod=>{ //map will iterate all the elements
        return   {
            updateOne:{
               filter:{_id:prod._id},//for finding the product 
               update:{$inc:{stock:-prod.count, sold:+prod.count}} //for updating the software
            }
        }
    }) 

    Product.bulkWrite(myOperations,{},(err,products)=>
    {
        if(err)
        {
            return res.status(400).json({
                error:"Bulk opertion failed"
            })
        }
        next()
    })
}


//get all  the categories


exports.getAllUniqueCategories =(req, res, next)=>
{
    Product.distinct("category",{},(err, category)=>{  //for getting unique identity in mongoose
        if(err)
        {
            return res.status(400).json({
                error:"No category found"
            })
        }
        res.json(category)
    }) 
}