const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/Collections';

const initDb = () => mongoose.connect(connectionString);

module.exports = initDb;