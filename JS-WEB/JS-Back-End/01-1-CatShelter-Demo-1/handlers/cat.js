const fs = require('fs');
const url = require('url');
const path = require('path');
const formidable = require('formidable');

const breeds = require('./../data/breeds.json');
const cats = require('./../data/cats.json');
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

            let catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{breeds}}', catBreedPlaceholder);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(modifiedData);
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

    } else if (pathname == '/cats/add-cat' && req.method == 'POST') {
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

            let oldPath = files.upload.path;
            let newPath = path.normalize(path.join(__dirname, './../images/' + files.upload.name));

            fs.rename(oldPath, newPath, (err) => {
                if (err) return err;
                console.log('File was uploaded successfully');
            });

            let catObj = { id: cats.length + 1, ...fields, image: files.upload.name };

            storageService.saveCat(catObj)
                .then(() => {
                    res.end();
                });

            res.writeHead(302, {
                'Location': '/'
            })
            res.end();
        });
    
    } else if (pathname.includes('/cats-edit') && req.method == 'GET') {
        let pattern = /[0-9]+/;
        let matches = pathname.match(pattern);
        let id = matches[0];

        let filePath = path.normalize(path.join(__dirname, './../views/editCat.html'));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/html',
                });
                res.write('404 Not Found');
                res.end();
                return;
            }

            let catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{breeds}}', catBreedPlaceholder);

            cats.map(cat => {
                if (cat.id == id) {
                    
                    let templatePattern = /\{\{(?<text>[a-z]+)\}\}/g;
                    let templateResult = modifiedData.toString().matchAll(templatePattern);

                    Array.from(templateResult).map((arr) => {
                        modifiedData = modifiedData.toString().replace(arr[0], cat[`${arr[1]}`]);

                    })
                }
            });

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(modifiedData);
            res.end();

        });

    } else if (pathname.includes('/cats-edit') && req.method == 'POST') {
        let pattern = /[0-9]+/;
        let matches = pathname.match(pattern);
        let id = matches[0];

        const form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log(err);
                res.writeHead(err.httpCode || 400, {
                    'Content-Type': 'text/plain',
                });
                res.write('Error');
                res.end(String(err));
                return;
            }

            let oldPath = files.upload.path;
            let newPath = path.normalize(path.join(__dirname, './../images/' + files.upload.name));

            fs.rename(oldPath, newPath, (err) => {
                if (err) return err;
                console.log('File was uploaded successfully');
            });

            console.log({...fields});
            let catObj = {id: id, ...fields, image: files.upload.name };

            storageService.editCat(catObj)
                .then(() => {
                    res.end();
                });

            res.writeHead(302, {
                'Location': '/'
            })
            res.end();
        })

    } else {
        return true;
    }
}