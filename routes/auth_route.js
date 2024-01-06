const express = require('express');
const authController = require('../controller/auth_controller')
const {auth} = require('../middlewares/auth')

const router = express.Router();

// Signup
router.post('/signup', authController.singup);

// Signin
router.post('/signin', authController.signin);

// Is Token Valid
router.post('/tokenIsValid', authController.tokenIsValid);

// get the user data
router.get('/getUser', auth, authController.getUser)

module.exports = router;