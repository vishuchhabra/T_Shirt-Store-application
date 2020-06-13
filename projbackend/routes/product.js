const router = require('express').Router()

const {isSignedIn,isAuthenticated,isAdmin}= require('../controllers/auth')
const {getUserById}= require('../controllers/user')
const {getProductById,getAllProducts, createProduct,getProduct,photo,deleteProduct,updateProduct,getAllUniqueCategories}= require('../controllers/product')

//all  of params
router.param("userId",getUserById)
router.param("productId",getProductById)

//actual  routes
router.post('/product/create/:userId',isSignedIn, isAuthenticated ,isAdmin, createProduct)

//read route
router.get('/product/:productId',getProduct)
router.get('/product/photo/:productId',photo)

//update
router.put('/product/:productId/:userId',isSignedIn,isAuthenticated,isAdmin,updateProduct)

//delete route
router.delete('/product/:productId/:userId',isSignedIn,isAuthenticated,isAdmin,deleteProduct)

//listing route

router.get('/products',getAllProducts)


router.get("/product/categories",getAllUniqueCategories)


module.exports = router