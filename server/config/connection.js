const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.d4jt8qo.mongodb.net/fitness-tracker');

module.exports = mongoose.connection;


