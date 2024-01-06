const utils = require('../utils/utils')

// auth middleware
const auth = async (req, res, next) =>{
    try{
        const token = req.header('x-auth-token');
        if(!token) return res.status(401).json({status: false, statusCode: 401, message: "No auth token"})

        const isVerified = utils.verifyToken(token);
        if(!isVerified) return res.status(401).json({status: false, statusCode: 401, message: "Token verification failed, authorization denied."})

        req.user = isVerified.id;
        req.token = token;
        next();
    }catch(e){
        res.status(500).json({status: false, statusCode: 500, error: e.message});
    }
}

module.exports = {auth}