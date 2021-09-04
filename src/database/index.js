const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schedule', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
