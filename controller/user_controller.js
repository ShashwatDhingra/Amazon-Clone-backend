const userServices = require('../services/user_service');

class UserController{

    // Add To Cart
    async addToCart(req, res){
        try{
            const {productId} = req.body;
            const result = await userServices.addToCart(productId, req.user);
            res.status(result.statusCode).json(result);
        }catch(e){
            res.status(500).json({status: false, statusCode: 500, error: e.message});
        }
    }

}

module.exports = new UserController();