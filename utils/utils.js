const jwt = require('jsonwebtoken');

class Utils {
    generateToken(id) {
        return jwt.sign({ id }, 'amazon-clone');
    }
    async verifyToken(token) {
        try {
            return jwt.verify(token, 'amazon-clone');
        } catch (e) {
            return false;
        }
    }
}

module.exports = new Utils();