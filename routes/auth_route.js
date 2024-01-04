const express = require('express');
const authController = require('../controller/auth_controller')

const router = express.Router();

// Signup
router.post('/signup', authController.singup);

module.exports = router;