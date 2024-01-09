const productModel = require('../model/product_model');

class ProductService {
    async getProduct(category) {
        try {
            const products = await productModel.find({ category });
            return { status: true, statusCode: 200, products }
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message }
        }
    }
}

module.exports = new ProductService();