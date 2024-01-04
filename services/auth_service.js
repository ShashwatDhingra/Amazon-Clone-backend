const userModel = require('../model/user_model')
const utils = require('../utils/utils');

class AuthService {
    // Signup
    async signup(name, email, password) {
        try {
            // Check if the User exists
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return { status: false, statusCode: 400, message: "Email already exists" }
            }

            let newUser = new userModel({ name, email, password });

            const user = await newUser.save();

            return { status: true,  statusCode: 200, message: "User created" , user};
        } catch (e) {
            return {status: false, statusCode: 500, error: e.message}
        }
    }

    async signin(email, password){
        try{
            // Check user
            const existingUser = await userModel.findOne({email});

            if(!existingUser){
                return {status: false, statusCode: 400, message: "User doesn't exists"};
            }

            const token = utils.generateToken(email);

            return {status: true, statusCode: 200, token};
        }catch(e){
            return {status: false, statusCode: 500, error: e.message};
        }
    }
}

module.exports = new AuthService();