const userModel = require('../model/user_model');
const { productModel } = require('../model/product_model')

class UserService {
    async addToCart(productId, userId) {
        try {
            console.log(productId);
            const product = await productModel.findById(productId);
            console.log(product);
            let user = await userModel.findById(userId);
            
            // if(user.cart.length == 0){
            //     user.cart.push({
            //         product,
            //         quantity : 1
            //     })
            // }else{
            //     let isProductFound = false;
            //     for(let i = 0; i < user.cart.length; i++){
            //         if(user.cart[i].product._id.toString() == product._id){
            //             isProductFound = true;
            //             user.cart[i].quantity++;
            //         }

            //         if(!isProductFound){
            //             user.cart.push({
            //                 product,
            //                 quantity : 1
            //             })
            //         }
            //     }
            // }

            user.cart = [];

            user = await user.save();

            return { status: true, statusCode: 200, user};

        } catch (e) {
            return { status: false, statusCode: 500, error: e.message };
        }
    }
}

module.exports = new UserService();