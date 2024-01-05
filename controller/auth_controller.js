const authService = require('../services/auth_service')

class AuthController {
    // Signup
    async singup(req, res) {
        const { name, email, password } = req.body;

        const response = await authService.signup(name, email, password);

        res.status(response.statusCode).json(response);
    }

    async signin(req, res) {
        const { email, password } = req.body;

        const response = await authService.signin(email, password);

        res.status(response.statusCode).json(response);
    }

    async tokenIsValid(req, res){

        const token = req.header('x-auth-token');

        const response = await authService.tokenIsValid(token);

        if(response.statusCode == 500){
            return res.status(500).json(response);
        }

        res.status(response.statusCode).json(response.status);
    }
}

module.exports = new AuthController();