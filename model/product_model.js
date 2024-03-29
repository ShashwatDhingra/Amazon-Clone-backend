const mongoose = require('mongoose');

const ratingSchema = require('./rating_schema')
const db = require('../config/db');


const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    images: [
        {
            type: String, required: true
        }
    ],
    rating: [ratingSchema]
});

const productModel = db.model('products', productSchema);

module.exports = {
    productModel,
    productSchema
};