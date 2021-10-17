const jwt = require('jsonwebtoken');
const { SECRET } = require('./../constants.js');



function auth(req, res, next) {
    let token = req?.cookies['jwt'];
    if (token) {
        jwt.verify(token, SECRET, (err, decodedToken) => {
            if (err) {
                throw {message: 'Not Authorized!'}
            }
            req.user = decodedToken;
            next();
        })
    } else {
        next(); 
    }
}

exports.authMiddleware = auth;