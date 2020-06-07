const express =  require('express')
const router = express.Router()
const {signup, signin, signout, isSignedIn} =require('../controllers/auth')
const { check, validationResult } = require('express-validator')


//sign up route
router.post('/signup',[
    check("name").isLength({min:3}).withMessage('Name should be atleast 3 char'), //apply the checks 
    check("email").isEmail().withMessage('Invalid Email'),
    check('password')
 
    .exists()
    .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
    .not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password') 
    .isLength({ min: 8 })
    .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
    .matches(/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/)  //for demanding the correct pattern for the password
    .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
    
] ,signup)


//sign in route
router.post('/signin',[
    
    check("email").isEmail().withMessage('Invalid Email'),
    check('password')
 
    .exists()
    .withMessage('Incorrect Password')
    .not().isIn(['123', 'password', 'god']).withMessage('Incorrect Password') 
    .isLength({ min: 8 })
    .withMessage('Incorrect Password')
    .matches(/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/)  //for demanding the correct pattern for the password
    .withMessage('Incorrect Password')
    
] ,signin)

//sign out route
router.get('/signout',signout)




//exporting the module 
module.exports = router