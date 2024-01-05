const jwt = require('jsonwebtoken');

class Utils {
    generateToken(id) {
        return jwt.sign({ id }, 'amazon-clone');
    }
    verifyToken(token) {
        return jwt.verify(token, 'amazon-clone');
    }
}

module.exports = new Utils();