const express = require('express');

const adminMiddleware = require('../middlewares/admin')
const adminController = require('../controller/admin_controller')

const router = express.Router();

// Add Product
router.post('/add-product', adminMiddleware, adminController.addProduct);

module.exports = router;