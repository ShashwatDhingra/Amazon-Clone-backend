const productModel = require('../model/product_model');
const ratingSchema = require('../model/rating_schema');

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

    /**
     * This is JsDoc.
     * Rate a product.
     *
     * @param {string} productId - The ID of the product.
     * @param {string} userId - The ID of the user rating the product.
     * @param {number} rating - The rating given by the user (a number).
     * @returns {Promise<Object>} - A promise that resolves to an object with status, statusCode, and message properties.
     */

    async rateProduct(productId, userId, rating) {
        try {
            const product = await productModel.findOne({ _id : productId });

            if (!product) {
                return { status: false, statusCode: 404, message: 'Product not found' };
            }

            const newRating = {
                userId, rating
            };

            // Find the index of the product 
            const ratingIndex = product.rating.findIndex(r => r.userId === userId);

            if (ratingIndex !== -1) {
                const deleteItem = product.rating.splice(ratingIndex, 1);
                product.rating.push(newRating);
            } else {
                product.rating.push(newRating);
            }

            await product.save();

            return { status: true, statusCode: 200, message: "Successfully Rate the product" };
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message };
        }
    }
}

module.exports = new ProductService();