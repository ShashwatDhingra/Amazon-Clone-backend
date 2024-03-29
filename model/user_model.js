const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const {productSchema} = require('../model/product_model')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String, required: true, unique: true, validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format'
        },
    },
    password: { type: String, required: true },
    address: { type: String, default: '' },
    type: {
        type: String,
        default: "user"
    },

    cart: [{
        product: productSchema,
        quantity: {
            type: Number,
            required: true
        }
    }]
})

// middleware function
userSchema.pre('save', async function (next) {
    try {
        var user = this;

        // only hash the password if it's modified (or its new)
        if (!user.isModified('password')) {
            return next();
        }

        try {
            const salt = await (bcrypt.genSalt(10));

            const hashPass = await bcrypt.hash(user.password, salt);

            user.password = hashPass;
        } catch (e) {
            return next(e);
        }
    } catch (e) {
        console.log(e);
    }
});

const userModel = db.model('users', userSchema);

module.exports = userModel;