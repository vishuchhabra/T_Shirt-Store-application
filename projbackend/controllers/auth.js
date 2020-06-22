const User = require('../models/user')
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

exports.signup =async  (req, res)=>
{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({
            error:errors.array()[0].msg //converting into  the array using array()
        })
    }

    var pass= (req.body.password).toLowerCase()
    var name = (req.body.name).toLowerCase()
    if(pass.includes(name))  //for checking that name should not present in the password
    {
        return res.status(400).json({
            error :"Do not use name in password for Security purposes"
        })
    }
    const user = new User(req.body) 
    await user.save((err ,user)=>
    {
        if(err){
          return  res.status(400).json(  // Error handling for the unique email 
          {
                  error: "Might be user Record already existed"
          }) 
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        })
        
    })
}


exports.signin = async (req, res)=>
{
 
 //if user is already exist
 const {token} = req.cookies
 if(token!==undefined)
 {
   return res.status(400).json({
       message: "User already login..."
 })}
 const  {email , password} = req.body //destructuring the object 
 const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({
            error:errors.array()[0].msg //converting into  the array using array()
        })
    }
    await User.findOne({email},function(err,user)
    {
       
       if(err || !user){ //if user does not exist
          
          return res.status(400).json(
          {
            error:"User Reocrd does not exist"
          })
       }
       if(!user.authenticate(password))  //method actually works on the instance of the schema 
       {
          return res.status(401).json(
          {
              error: "Email and password does not exist"
          })
       }
      //create token with jwt 
      const token  = jwt.sign({_id:user._id}, process.env.SECRET)
      //put token into  the  cookie
      res.cookie("token",token,{expires: new Date(Date.now() + 900000)}) //adding the cookie for the loign user with expire time
      
      //send response to front end
      const {_id,name , email,role } = user
    
      return  res.json({
          token , user:{
               _id, name ,email, role
          }
      })
    })
}


exports.signout = async (req, res)=>
{
//if user is already logout
const {token} = req.cookies
if(token===undefined)
{
  return res.status(400).json({
      message:"No user is login right now..."
})}

res.clearCookie("token")
res.status(200).json({
    message:"User SignOut Successfully... "
})
}


//protected routes

exports.isSignedIn = expressJwt({  //for validating the jwt token in cokkie   //next no need here 
    secret: process.env.SECRET,
    userProperty:"auth"  //define the userProperty in cookie-parser which cookie parser allow us to  do.
    //after this auth will hold two things  1 .id  2. iat  
    
    //basically it add more stuff to  req , adding property name is auth //so we can access through req.auth
})


//custom middlewares

exports.isAuthenticated = (req, res , next)=>
{
    let checker = req.profile  && req.auth && req.profile._id ==req.auth._id  //== does not check data type 
    // === this also  compare the data type also
    if(!checker)
    {
        return res.status(403).json({
            error:"ACCESS DENIED"
        })
    }
    next()
}

exports.isAdmin  = (req, res , next)=>
{
    if(!req.profile.role)
    {
        return res.status(403).json(
        {
          error:"You are not ADMIN, Access denied"
        })
    }
    next()

}



