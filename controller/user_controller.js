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

    // Remove From Cart
    async removeFromCart(req, res){
        try{
            const{productId} = req.body;
            const response = await userServices.removeFromCart(productId, req.user);
            res.status(response.statusCode).json(response);
        }catch(e){
            res.status(500).json({status: false, statusCode: 500, error: e.message});
        }
    }   

    // Save Address
    async saveAddress(req, res){
        try{
            const {address} = req.body;

            const response = await userServices.saveAddress(address, req.user);

            res.status(response.statusCode).json(response);
        }catch(e){
            res.status(500).json({status: false, statusCode: 500, error: e.message});
        }
    }

}

module.exports = new UserController();