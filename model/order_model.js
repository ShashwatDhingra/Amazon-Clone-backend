const mongoose = require('mongoose');
const db = require('../config/db');
const {productSchema} = require('./product_model');

const orderSchema = mongoose.Schema({

    products: [{
        product: productSchema,
        quantity: {
            type: Number,
            require: truee
        }
    }],
    totalPrice:  {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    orderAt: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 0
    }
})

const orderModel = db.model('order',orderSchema);
module.exports = orderModel;