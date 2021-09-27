const http = require('http');
const fs = require('fs');

const port = 5000;

let app = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            let homePage = fs.readFileSync('./views/home/index.html');
            res.writeHead(200, {
                'content-Type': 'text/html'
            });
            res.write(homePage);
            break;

        case '/styles/site.css':
            let styles = fs.readFileSync('./styles/site.css');
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.write(styles);
            break;

        case '/js/script.js':
            let scripts = fs.readFileSync('./js/script.js');
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.write(scripts);
        
        default: 
            res.statusCode = 404
            break;
        }

        res.end();
});

app.listen(port);

console.log('App is running on port 5000 ... ');