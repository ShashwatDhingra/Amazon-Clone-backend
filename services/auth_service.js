const userModel = require('../model/user_model')
const utils = require('../utils/utils');
const bcrypt = require('bcrypt');

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

            return { status: true, statusCode: 200, message: "User created", user };
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message }
        }
    }

    async signin(email, password) {
        try {
            // Check user
            const existingUser = await userModel.findOne({ email });

            if (!existingUser) {
                return { status: false, statusCode: 400, message: "User doesn't exists" };
            }

            const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordMatch) {
                return { status: false, statusCode: 400, message: "Password doesn't match" };
            }

            const token = utils.generateToken(existingUser._id);

            return { status: true, statusCode: 200, token, ...existingUser._doc };
        } catch (e) {
            return { status: false, statusCode: 500, error: e.message };
        }
    }

    async tokenIsValid(token) {
        try {
            if (!token) {
                return { status: false, statusCode: 200 };
            }
            const isVerified = await utils.verifyToken(token);

            if (!isVerified) return { status: false, statusCode: 200 };

            const user = userModel.findById(isVerified.id);

            if (!user) return { status: false, statusCode: 200 };

            return { status: true, statusCode: 200 };


        } catch (e) {
            console.log(e.message);
            return { status: false, statusCode: 500, error: e.messsage };
        }
    }
}

module.exports = new AuthService();