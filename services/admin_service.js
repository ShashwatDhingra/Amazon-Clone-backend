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
            return { status: false, statusCode: 500, error: "Internal Error! " };
        }
    }
}

module.exports = new AdminService();