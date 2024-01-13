const express = require('express');
const Router = express.Router();
const authMiddleware = require('../middlewares/auth');
const userController = require('../controller/user_controller');


Router.post('/add-to-cart', authMiddleware, userController.addToCart);

module.exports = Router;