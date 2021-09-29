const fs = require('fs');
const url = require('url');
const path = require('path');
const formidable = require('formidable');

const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');
const storageService = require('./../handlers/storageService.js');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname == '/cats/add-cat' && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, './../views/addCat.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });

    } else if (pathname == '/cats/add-breed' && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, './../views/addBreed.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });

    } else if (pathname == '/cats/add-breed' && req.method == 'POST') {
        // console.log(req);
        const form = formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(err.httpCode || 400, {
                    'Content-Type': 'text/plain'
                });
                res.write('Error');
                res.end(String(err));
                return;
            }

            storageService.saveBreed(fields)
                .then(() => {
                    res.end();
                });
        });
        
        res.writeHead(302, {
            'Location': '/'
        })
        res.end();
    } else {
        return true;
    }
}