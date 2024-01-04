const express = require('express');
const authRouter = require('./routes/auth_route');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter);  // => prefix : /auth/<individual-route>

module.exports = app;