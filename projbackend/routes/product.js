const router = require('express').Router()

const {isSignedIn,isAuthenticated,isAdmin}= require('../controllers/auth')
const {getUserById}= require('../controllers/user')
const {getProductById, createProduct}= require('../controllers/product')

//all  of params
router.param("userId",getUserById)
router.param("productId",getProductById)

//actual  routes
router.post('/product/create/:userId',isSignedIn, isAuthenticated ,isAdmin, createProduct)

module.exports = router