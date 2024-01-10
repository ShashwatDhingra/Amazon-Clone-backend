const productService = require('../services/product_service')

class ProductController {
    async getCategoryProducts(req, res) {
        try {
            const category = req.query.category;
            const result = await productService.getCategoryProducts(category);
            res.status(result.statusCode).json(result);
        } catch (e) {
            res.status(500).json({ status: false, statusCode: 500, error: e.message });
        }
    }

    async getSearchedProducts(req, res) {
        try {
            const { searchQuery } = req.params;

            const result = await productService.getSearchedProducts(searchQuery);

            res.status(result.statusCode).json(result);
        } catch (e) {
            res.status(500).json({status: false, statusCode: 500, error: e.message});
        }
    }
}

module.exports = new ProductController();