const mongoose  = require('mongoose')

const categorySchema =  new mongoose.Schema(
{
  name :{
      type:String,
      trim : true,
      required:true,
      maxlength:32,
      unique:true
  }
},{timestamps:true}) //it will  store the time in database whenever we will  create database through this database

module.exports = mongoose.model("Category",categorySchema)