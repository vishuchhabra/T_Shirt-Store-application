const router  = require('express').Router()

const {getCategoryById,updateCategory, createCategory,getAllCategory,getCategory,removeCategory} = require("../controllers/category")
const {isSignedIn, isAdmin, isAuthenticated} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

router.param("userId" ,getUserById) //it will populate the profile field
router.param("categoryId",getCategoryById)


//routes
router.post("/category/create/:userId",isSignedIn,isAuthenticated, isAdmin, createCategory)


//read
router.get("/category/:categoryId", getCategory)
router.get("/categories/", getAllCategory)

//update
router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated, isAdmin, updateCategory)

//delete

router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated, isAdmin, removeCategory)

module.exports = router