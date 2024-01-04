const userModel = require('../model/user_model')

class AuthService {
    // Signup
    async signup(name, email, password) {
        try {
            // Check if the User exists
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return { status: false, statusCode: 200, message: "Email already exists" }
            }

            let newUser = new userModel({ name, email, password });

            const user = await newUser.save();

            return { status: true,  statusCode: 400, message: "User created" , user};
        } catch (e) {
            return {status: false, statusCode: 500, error: e.message}
        }
    }
}

module.exports = new AuthService();