const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth_route');
const adminRouter = require('./routes/admin_route');
const productRouter = require('./routes/product_route')

const app = express();

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter);   // => prefix : /auth/<individual-route>
app.use('/admin', adminRouter); // => prefix : /admin/<individual-route>
app.use('/product', productRouter); // => prefix : /admin/<individual-route>
module.exports = app;