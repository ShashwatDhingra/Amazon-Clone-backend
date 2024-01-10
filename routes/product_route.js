const express = require('express');
const authMiddleware = require('../middlewares/auth')
const productController = require('../controller/product_controller')

const Router = express.Router();

// Get Category Products
Router.get('/get-products', authMiddleware, productController.getCategoryProducts);

// Get Searched Products
Router.get('/get-products/:searchQuery', authMiddleware, productController.getSearchedProducts)

module.exports = Router;