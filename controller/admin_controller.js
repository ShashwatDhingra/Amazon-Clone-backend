const adminService = require('../services/admin_service');

class AdminController {
    async addProduct(req, res) {
        try {
            const { name, description, quantity, price, category, images } = req.bdy;
            const response = await adminService.addProduct(name, description, price, quantity, category, images);
            res.status(response.statusCode).json(response);
        } catch (e) {
            res.status(500).json({ status: false, statusCode: 500, error: e.message });
        }
    }
}

module.exports = new AdminController();