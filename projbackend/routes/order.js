const router = require('express').Router()
const {isSignedIn,isAuthenticated,isAdmin}= require('../controllers/auth')
const {getUserById,pushOrderInPurchaseList}= require('../controllers/user')
const {updateStock} = require('../controllers/product')
const {getOrderById, createOrder,getAllOrders,getOrderStatus,updateStatus}= require('../controllers/order')

//params
router.param("userId",getUserById)
router.param('orderId',getOrderById)

//actual routes

//create
router.post('/order/create/:userId',isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)


//read routes
router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)

//status of order only for admin
router.get('/order/status/:userId',isSignedIn,isAuthenticated,isAdmin,getOrderStatus)

router.put('/order/:orderId/stauts/:userId',isSignedIn,isAuthenticated,isAdmin,updateStatus)

//exporting the module
module.exports = router