const Product = require('../models/product')
const fs = require('fs')
const formidable = require("formidable")
const _ = require('lodash')  //lodash for easy methods in java script
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
           product.photo.data = fs.readFileSync(file.photo.path)
           product.photo.contentType= file.photo.type
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