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

    const user = new User(req.body) 
    user.save((err ,user)=>
    {
        if(err){
          return  res.status(400).json(
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

