const express = require('express');
const Router = express.Router();
const authMiddleware = require('../middlewares/auth');
const userController = require('../controller/user_controller');

// Add To Cart
Router.post('/add-to-cart', authMiddleware, userController.addToCart);

// Remove From Cart
Router.delete('/remove-from-cart', authMiddleware, userController.removeFromCart);

// Save the address
Router.post('/save-address', authMiddleware, userController.saveAddress);

// Make Order
Router.post('/order', authMiddleware, userController.makeOrder);


module.exports = Router;