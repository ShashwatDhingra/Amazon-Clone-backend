require('dotenv').config();

const app = require('./app')

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {  // 0.0.0.0 is used to allow anyone to access the server
    console.log(`connected at PORT ${PORT}`)
})