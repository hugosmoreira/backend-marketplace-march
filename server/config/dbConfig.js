const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url)

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
})

module.exports = connection;