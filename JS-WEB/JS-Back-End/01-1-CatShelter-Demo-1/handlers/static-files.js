const url = require('url');
const fs = require('fs');
const path = require('path');

function getContentType(url) {
    if (url.endsWith('css')) {
        return 'text/css';
    } else if (url.endsWith('js')) {
        return 'text/javascript';
    } else if (url.endsWith('png')) {
        return 'image/png';
    } else if (url.endsWith('jpg')) {
        return 'image/jpeg';
    } else if (url.endsWith('jpeg')) {
        return 'image/jpeg';
    } else if (url.endsWith('ico')) {
        return 'image/ico';
    } else if (url.endsWith('webp')) {
        return 'image/webp';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    let contentType = getContentType(pathname);

    if (pathname.startsWith('/styles') && req.method == 'GET' && pathname.endsWith('css')) {
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
    } else if (pathname.startsWith('/js') && req.method == 'GET' && pathname.endsWith('js')) {
        let jsFilesPath = path.normalize(path.join(__dirname, './../js/script.js'));
        fs.readFile(jsFilesPath, (err, data) => {
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

        });
    } else if (pathname.startsWith('/images') && req.method == 'GET' &&
        pathname.endsWith('ico') || pathname.endsWith('jpg') ||
        pathname.endsWith('png') || pathname.endsWith('jpeg') ||
        pathname.endsWith('webp')) {

        let filePath = path.normalize(path.join(__dirname, `./../${pathname}`));
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
                'Content-Type': contentType
            });
            res.write(data);
            res.end();
        });

    } else {
        return true;
    }

}