const express = require('express');
const fs = require('fs/promises');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uniqid = require('uniqid');
const handlebars = require('express-handlebars');

const authService = require('./services/authService.js');
const { authMiddleware } = require('./middlewares/authMiddleware.js');
const { SECRET } = require('./constants.js');
const app = express();



// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'asdfg/ldfkv;jrnvt;ounsdcjsdkbv;agero',
}));
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static('./public'))
app.use(authMiddleware);


//Endpoints
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/custom-cookie', (req, res) => {
    if (!req.headers.cookie) {
        res.header({
            'content-type': 'text-html',
            'Set-Cookie': 'test-cookie=test-value; httpOnly',
        });
    }

    console.log(req.headers.cookie);

    fs.readFile('./views/demo.html')
        .then(htmlResult => {
            res.write(htmlResult);
            res.end();
        });
});

app.get('/cookie', async (req, res) => {
    res.cookie('auth-cookie', 'Some-Value', {
        httpOnly: true
    });
    console.log(req.cookies);

    fs.readFile('./views/demo.html')
        .then(htmlResult => {
            res.write(htmlResult);
            res.end();
        });
});

app.get('/set-session/:name', (req, res) => {
    req.session.user = req.params.name;
    res.send('Set Session');
});

app.get('/session', (req, res) => {
    console.log(req.session);
    res.send('Get Session -' + req.session.user);
});

app.get('/bcrypt', (req, res) => {
    let password = 'softunibackendexercise';
    let saltRounds = 9;

    bcrypt.genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(password, salt);
        })
        .then(hash => {
            console.log(hash);
            res.send(hash);
        })
});

app.get('/bcrypt/verify/:password', (req, res) => {
    let hash = '$2b$09$KuZ0pQzsXDzaZt9b.Rg6xe8Scrhgq9td1HOX1qz1IB83Xp79nmYY2';
    bcrypt.compare(req.params.password, hash)
        .then(result => {
            console.log(result);
            res.send(result);
        })
});

app.get('/token/create/:password', (req, res) => {
    let payload = {
        id: uniqid(),
        password: req.params.password
    }
    let options = { expiresIn: '1d' };

    let token = jwt.sign(payload, SECRET, options);
    res.cookie('jwt', token);
    res.send(token);
});

app.get('/token/verify', (req, res) => {
    let token = req.cookies.jwt;
    jwt.verify(token, SECRET, (err, payload) => {
        if (err) {
            return res.status(400).send(err);
        }

        res.json(payload);
    })
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    let { username, password } = req.body;

    try {
        let user = await authService.register(username, password);
        res.redirect('/login');

    } catch (error) {
        return res.status(400).send(err);
    }

});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    let { username, password } = req.body;
    try {

        let isValid = await authService.login(username, password);

        if (isValid) {
            let user = await authService.getUser(username);
            let token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1d' }, (err, token) => {
                if (err) {
                    return res.status(400).send(err);
                }
                res.cookie('jwt', token);
                res.redirect('/');
            });

        } else {
            res.status(401).send('Cannot Login');
        }

    } catch (error) {
        res.status(401).send(error.message);
    }
});

app.get('/profile', (req, res) => {
    if (!req.user) {
        return res.status(401).send('You are not authorized to view this page');
    }
    res.render('profile', req.user);
});




app.listen(3000, console.log.bind(console, 'Server is listening on port http://localhost:3000 ...'))