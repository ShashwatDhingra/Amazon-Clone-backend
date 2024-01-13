const { default: mongoose } = require('mongoose');
const {productModel} = require('../model/product_model');
const { ObjectId } = require('mongodb');

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
            return { status: true, statusCode: 200, products };
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message };
        }
    }

    async deleteProduct(_id){
        try{
            const result = await productModel.deleteOne({_id});
            if(result.deletedCount > 0) return {status: true, statusCode: 200, message: "Product Deleted !"};

            return {status: false, statusCode: 404, message: "Product not found."};
        }catch(e){
            return {status: false, statusCode: 500, error: e.message};
        }
    }
}

module.exports = new AdminService();