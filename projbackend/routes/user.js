const User = require('../models/user')
const router = require('express').Router()

const {getUserById, getUser} = require('../controllers/user')
const {isSignedIn,isAdmin, isAuthenticated} =require('../controllers/auth')


//this will find the user information based on userId //important 
router.param("userId",getUserById) 

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)



//exporting the router
module.exports = router