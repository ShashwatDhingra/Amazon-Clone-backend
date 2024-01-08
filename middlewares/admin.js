const utils = require('../utils/utils');
const userModel = require('../model/user_model');

// admin middleware
const admin = async (req, res, next) => {

    try {
        const token = req.token('x-auth-token');
        if (!token) return res.status(401).json({ status: false, statusCode: 401, message: "No auth token" });

        const isVerified = utils.verifyToken(token);

        if (!isVerified) return res.status(401).json({ status: false, statusCode: 401, message: "Token verification failed, Authentication denied." })

        // confirm that the user type is admin
        const user = await userModel.findById(isVerified.id);
        if (!(user.type == 'admin')) return res.status(401).json({ status: false, statusCode: 401, message: 'Sorry --  You are not an admin' });

        // Completely verified -- move ahead
        req.id = isVerified.id;
        req.token = token;

        next();
    }catch (e) { 
        res.status(500).json({status: false, statusCode: 500, error: e.message});
    }

}