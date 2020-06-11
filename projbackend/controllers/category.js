const Category = require('../models/category')
exports.getCategoryById =(req, res , next, id)=>
{
   Category.findById(id).exec((err, category)=>{
         if(err)
         return  res.status(400).json({
             error:"Category not found in DB"
         })
         req.category = category
         next();
    })
}
//create
exports.createCategory = (req, res)=>
{
    const category= new Category(req.body)
    category.save((err, category)=>
    {
        if(err){
        
         return  res.status(400).json({
             error:"Not able to save Category in DB"
         })
        }
        res.json({category})
    })
}

//read
exports.getCategory = (req, res)=>
{
    return res.json(req.category)
}
exports.getAllCategory = (req, res)=>
{
    //all the categories
    Category.find().exec((err, items)=>
    {
        if(err){
            return  res.status(400).json({
                error:"No any category find"
            })
        }
        res.json(items)
    })
}

//update
exports.updateCategory = (req, res)=>
{
    const category  = req.category
    category.name = req.body.name
    category.save((err, updatedCategory)=>
    { 
        if(err){
            return  res.status(400).json({
                error:"Failed to update category"
            })
        }
        res.json(updatedCategory)
    })
}

//delete
exports.removeCategory =(req,res)=>
{
    const category = req.category
    //remove function is given by mongos to remove the entry
    category.remove((err, category)=> //this category has been deleted
    {
        if(err){
            return  res.status(400).json({
                error:"Failed to delete this category"
            })
        }
        res.json({
            message:"Successfuly deleted"
        })
    })
}

