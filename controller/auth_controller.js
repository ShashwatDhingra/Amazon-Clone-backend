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

        res.status(response.statusCode).json(response.statusCode);
    }
}

module.exports = new AuthController();