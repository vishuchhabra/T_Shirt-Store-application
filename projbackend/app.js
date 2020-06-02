//loading the dotenv module 
require('dotenv').config() //configuring the dotenv in single line

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 4000

//connecting the local database
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true})
.then(result=>
{
   console.log("Local database has been connected")

})
.catch(err=>
{
   console.log(err)
})


//listening the port 
app.listen(port,()=>
{
    console.log(`server is listening on port ${port}`)
})