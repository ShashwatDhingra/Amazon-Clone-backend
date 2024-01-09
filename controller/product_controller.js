const productService = require('../services/product_service')

class ProductController {
    async getProducts(req, res) {
        try {
            const category = req.query.category;
            const result = await productService.getProduct(category);
            res.status(result.statusCode).json(result);
        } catch (e) {
            res.status(500).json({ status: false, statusCode: 500, error: e.message });
        }
    }
}

module.exports = new ProductController();