const homeHandler = require('./home.js');
const staticFiles = require('./static-files.js');
const addCatHandler = require('./cat.js');

module.exports = [homeHandler, staticFiles, addCatHandler];