const mongoose  =  require('mongoose')
const {ObjectId} =mongoose.Schema
const productSchema = new mongoose.Schema(
{
   name:
   {
       type:String,
       trim:true,
       required:true,
       maxlength:32
   },
   description: 
   {
      type: String,
      trim: true,
      required:false,
      maxlength:2000
   },
   price:
   {
       type :Number,
       required :true,
       maxlength:32,
       trim: true
   },
   category:{
       type :ObjectId,
       required:true,
       ref : "Category"
   },
   stock:{
       type:Number
   },
   sold:{
       tpye:Number,
       default:0
   },
   photo:{
       data: Buffer,
       contentType: String
   }
},{timestamps:true})

module.exports  = mongoose.model("Product",productSchema)

