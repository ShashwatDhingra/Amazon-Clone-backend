const productModel = require('../model/product_model');

class ProductService {
    async getCategoryProducts(category) {
        try {
            const products = await productModel.find({ category });
            return { status: true, statusCode: 200, products }
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message }
        }
    }

    async getSearchedProducts(searchQuery) {
        try {
            let products = await productModel.find({
                name: new RegExp(`^${searchQuery}`, 'i')  // 'i' => This is a flag used for apply case-sensitive.
            });

            return { status: true, statusCode: 200, products, message: 'Successful' }
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message }
        }
    }
}

module.exports = new ProductService();