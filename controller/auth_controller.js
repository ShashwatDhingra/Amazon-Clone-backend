const authService = require('../services/auth_service')

class AuthController {
    // Signup
    async singup(req, res) {
        const { name, email, password } = req.body;

        const response = await authService.signup(name, email, password);

        if(response.status){
            res.status(response.statusCode).json(response);
        }else{
            res.status(response.statusCode).json(response);
        }
    }
}

module.exports = new AuthController();