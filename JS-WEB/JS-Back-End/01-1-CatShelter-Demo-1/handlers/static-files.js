const url = require('url');
const fs = require('fs');
const path = require('path');

function getContentType(url) {
    if(url.endsWith('css')) {
        return 'text/css';
    } else if (url.endsWith('js')) {
        return 'text/javascript';
    } else if (url.endsWith('png')) {
        return 'image/png';
    } else if (url.endsWith('jpg')) {
        return 'image/jpeg';
    } else if (url.endsWith('ico')) {
        return 'image/ico';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method == 'GET') {
        let contentType = getContentType(pathname);

        if (pathname.endsWith('css')) {
            let stylesPath = path.normalize(path.join(__dirname, './../styles/site.css'));

            fs.readFile(stylesPath, (err, data) => {
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
                    'Content-Type': contentType
                });
                res.write(data);
                res.end();
            })

        } else if (pathname.endsWith('js') &&  req.method == 'GET') {
            let jsFilesPath = path.normalize(path.join(__dirname, './../js/script.js'));
            fs.readFile(jsFilesPath, (err, data) => {
                if(err) {
                    console.log(err);
                    res.writeHead(404, {
                        'Content-Type': 'text/plain'
                    });
                    res.write('404 Not Found');
                    res.end();
                    return;
                }

                res.writeHead(200, {
                    'Content-Type': contentType
                });
                res.write(data);
                res.end();

            })
        } else if (pathname.endsWith('ico') &&  req.method == 'GET') {
            let favIconPath = path.normalize(path.join(__dirname, './../images/pawprint.ico'));
            fs.readFile(favIconPath, (err, data) => {
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
                    'Content-Type': contentType
                });
                res.write(data);
                res.end();
            })
        }
        
    } else {
        return true;
    }
}