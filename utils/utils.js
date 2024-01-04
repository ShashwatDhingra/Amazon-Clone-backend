const jwt = require('jsonwebtoken');

class Utils {
    generateToken(email) {
        return jwt.sign({ email }, 'amazon-clone');
    }
}

module.exports = new Utils();