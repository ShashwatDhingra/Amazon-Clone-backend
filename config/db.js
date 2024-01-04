const mongoose = require('mongoose');

const dbConnection = mongoose.createConnection(process.env.DATABASE_URL).on('open', () => {
    console.log('Connected to the MongoDb Successfully');
}).on('error', ()=>{
    console.log('Error while connecting to the MongoDB.');
})

module.exports = dbConnection;