const User = require('../models/user')
const router = require('express').Router()

const {getUserById, getUser,updateUser,userPurchaseList} = require('../controllers/user')
const {isSignedIn,isAdmin, isAuthenticated} =require('../controllers/auth')


//this will find the user information based on userId //important 
router.param("userId",getUserById) 

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)

//for updating the user information

router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser) //but it will not update the password 

router.put("orders/user/:userId",isSignedIn,isAuthenticated,userPurchaseList) //but it will not update the password 

//exporting the router
module.exports = router