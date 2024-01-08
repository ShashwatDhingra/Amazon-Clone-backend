const productModel = require('../model/product_model');

class AdminService {
    async addProduct(name, description, price, quantity, category, images) {
        try {
            let product = new productModel({
                name, description, price, quantity, category, images
            });
            product = await product.save();

            return { status: true, statusCode: 200, product, message: "Successfully saved the product in Database." };
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message };
        }
    }

    async getProducts() {
        try {
            const products = await productModel.find({});
            console.log(products);
            return { status: true, statusCode: 200, products };
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message };
        }
    }
}

module.exports = new AdminService();