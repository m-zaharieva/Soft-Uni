const http = require('http');
const fs = require('fs');

const handlers = require('./handlers')

const port = 5000;

let app = http.createServer((req, res) => {

    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
    // switch(req.url) {
    //     //   Home page
    //     case '/':
    //         let homePage = fs.readFileSync('./views/home/index.html');
    //         res.writeHead(200, {
    //             'content-Type': 'text/html'
    //         });
    //         res.write(homePage);
    //         res.end();
    //         break;

    //     //   Page CSS Files
    //     case '/styles/site.css':
    //         let styles = fs.readFileSync('./styles/site.css');
    //         res.writeHead(200, {
    //             'Content-Type': 'text/css'
    //         });
    //         res.write(styles);
    //         res.end();
    //         break;

    //     //   Page JS Files
    //     case '/js/script.js':
    //         let scripts = fs.readFileSync('./js/script.js');
    //         res.writeHead(200, {
    //             'Content-Type': 'text/javascript'
    //         });
    //         res.write(scripts);
    //         res.end();
    //         break;

    //     //   Add Cat Page
    //     case '/cats/add-cat':
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         fs.readFile('./views/addCat.html', (err, data) => {
    //             if (err) {
    //                 res.statusCode = 404;
    //                 res.end();
    //                 return;
    //             }
    //             res.write(data);
    //             res.end();
    //         });
    //         break;

    //     //   Add Breed Page
    //     case '/cats/add-breed':
    //         res.writeHead(200, {
    //             'Content-Type' : 'text/html'
    //         });
    //         fs.readFile('./views/addBreed.html', (err, data) => {
    //             if (err) {
    //                 res.statusCode = 404;
    //                 res.end();
    //             }

    //             res.write(data);
    //             res.end();
    //         })
    //         break;

    //     //   404 - Page Not Found
    //     default: 
    //         res.statusCode = 404;
    //         res.end();
    //         break;
    //     }
});

app.listen(port);

console.log('App is running on port 5000 ... ');