const express = require('express');
const fs = require('fs');
const handlebars = require('express-handlebars');

const catController = require('./controllers/catController.js');

const server = express();

server.engine('hbs', handlebars());
server.set('view engine', 'hbs');

server.use('/static', express.static('./public'));
server.use('/cats', catController);

server.get('/', (req, res) => {
    // res.header({'Content-Type': 'text/html'});
    // res.write(`
    // <h1>Home</h1>
    // <ul>
    //     <li><a href="/addBreed">Add Breed</a></li>
    //     <li><a href="/addCat">Add Cat</a></li>
    // </ul>    
    // `);
    // res.end();

    // Render with handlebars
    res.render('home', {layout: false});
});

server.get('/addBreed', (req, res) => {
    res.header({'Content-Type': 'text/html'});
    res.write('<h1>Add Breed</h1>');
    res.end();
});

server.get('/addCat', (req, res) => {
    res.header({'Content-Type': 'text/html'});
    res.write('<h1>Add Cat</h1>');
    res.end();
});

server.get('/send-file', (req, res) => {
    res.sendFile('./images/cute-cat.jpg', {root: __dirname});
})

server.get('/download', (req, res) => {
    res.header({
        'Content-Disposition': 'attachment; filename="cute-cat.jpg"',
    });

    let imageStream = fs.createReadStream('./images/cute-cat.jpg');
    imageStream.pipe(res);
});

server.listen(3000, () => console.log('Server is running on port 3000'));