const express = require('express');

const adminMiddleware = require('../middlewares/admin')
const adminController = require('../controller/admin_controller')

const router = express.Router();

// Add Product
router.post('/add-product', adminMiddleware, adminController.addProduct);

// Get Products
router.get('/get-products', adminMiddleware, adminController.getProducts);

// Delete Product
router.delete('/delete-product', adminMiddleware, adminController.deleteProduct);

module.exports = router;