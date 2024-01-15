const userModel = require('../model/user_model');
const { productModel } = require('../model/product_model')

class UserService {
  async addToCart(productId, userId) {
    try {
      const product = await productModel.findById(productId);
      let user = await userModel.findById(userId);

      if (user.cart.length == 0) {
        user.cart.push({ product, quantity: 1 });
      } else {
        let isProductFound = false;
        for (let i = 0; i < user.cart.length; i++) {
          if (user.cart[i].product._id.equals(product._id)) {
            isProductFound = true;
          }
        }

        if (isProductFound) {
          let producttt = user.cart.find((productt) =>
            productt.product._id.equals(product._id)
          );
          producttt.quantity += 1;
        } else {
          user.cart.push({ product, quantity: 1 });
        }
      }

      user = await user.save();

      return { status: true, statusCode: 200, user };

    } catch (e) {
      return { status: false, statusCode: 500, error: e.message };
    }
  }

  async removeFromCart(productId, userId) {
    try {
      const product = await productModel.findById(productId);
      let user = await userModel.findById(userId);

      for (let i = 0; i < user.cart.length; i++) {
        if (user.cart[i].product._id.equals(product._id)) {
          if (user.cart[i].quantity == 1) {
            user.cart.slice(i, 1);
          } else {
            user.cart[i].quantity--;
          }
        }
      }

      return { status: true, statusCode: 200, user };
    } catch (e) {
      return { status: false, statusCode: 500, error: e.message };
    }
  }
}

module.exports = new UserService();