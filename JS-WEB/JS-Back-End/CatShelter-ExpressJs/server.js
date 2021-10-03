const express = require('express');
const fs = require('fs');
const path = require('path');
const handlebars = require('express-handlebars');

const catController = require('./controllers/catController.js');
const cats = require('./DB/cats.json');


// server 
const server = express();

// Template engine setup
server.engine('hbs', handlebars({ extname: 'hbs' }));
server.set('view engine', 'hbs');

// Middlewares
server.use('/public', express.static(path.join(__dirname, './public')));
server.use('/cats', catController);

// Route Home Page
server.get('/', (req, res) => {
    // Custom HTML response 
    // let filePath = path.resolve(__dirname, './views/home/index.html');
    // res.sendFile(filePath);

    // Render with handlebars
    res.render('home', {
        cats
    }); 
});





// start server on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000...');
})