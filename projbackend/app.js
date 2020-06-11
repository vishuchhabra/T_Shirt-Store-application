//loading the dotenv module 
require('dotenv').config() //configuring the dotenv in single line

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser  =require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 4000
const morgan = require('morgan')
//my routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")

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

//general middlewares
app.use(morgan('dev')) //for printing the incoming requests status
app.use(bodyparser.json())
app.use(cookieParser())
app.use(cors())

//backend routes
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)

//listening the port 
app.listen(port,()=>
{
    console.log(`server is listening on port ${port}`)
})