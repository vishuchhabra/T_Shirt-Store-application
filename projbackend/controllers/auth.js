const User = require('../models/user')
const { check, validationResult } = require('express-validator');

exports.signup = (req, res)=>
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
            err :"Do not use name in password for Security purposes"
        })
    }
    const user = new User(req.body) 
    user.save((err ,user)=>
    {
        if(err){
          return  res.status(400).json(  // Error handling for the unique email 
          {
                  err: "Might be user Record already existed"
          }) 
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        })
        
    })
}

