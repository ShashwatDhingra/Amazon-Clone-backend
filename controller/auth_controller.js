const authService = require('../services/auth_service')

class AuthController {
    // Signup
    async singup(req, res) {
        const { name, email, password } = req.body;

        const response = await authService.signup(name, email, password);

        if(response.status){
            res.status(200).json(response);
        }else{
            res.status(400).json(response);
        }
    }
}

module.exports = new AuthController();