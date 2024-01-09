const express = require('express');
const authMiddleware = require('../middlewares/auth')
const productController = require('../controller/product_controller')

const Router = express.Router();

// Get Products
Router.get('/get-products', authMiddleware, productController.getProducts);

module.exports = Router;