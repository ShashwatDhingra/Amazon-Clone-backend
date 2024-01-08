const express = require('express');

const adminMiddleware = require('../middlewares/admin')
const adminController = require('../controller/admin_controller')

const Router = express.Router();

// Add Product
Router.post('/add-product', adminMiddleware, adminController.addProduct);

module.exports = Router;