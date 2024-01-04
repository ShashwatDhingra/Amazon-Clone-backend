const jwt = require('jsonwebtoken');

class Utils {
    generateToken(id) {
        return jwt.sign({ id }, 'amazon-clone');
    }
}

module.exports = new Utils();