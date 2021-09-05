const express =require('express');
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, {useMongoClient: true}, () => console.log('DB CONNECTED'));
mongoose.Promise = global.Promise;

module.exports = mongoose;
