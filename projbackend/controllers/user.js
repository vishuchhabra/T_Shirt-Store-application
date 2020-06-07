const User = require('../models/user')

exports.getUserById = (req, res, next , id)=>{
User.findById(id).exec((err ,user)=>    //we can use .exec as well as callback  while using the mongoose
{
   if(err || !user ) {
       return res.status(400).json(
           {
               error:"No user was foun in DB"
           }
       )
   }
   //storing the user in req
   req.profile = user //make the profile object 
   next() 
})}

exports.getUser = (req,res)=>
{   

    TODO:
    return res.json(req.profile)
}

