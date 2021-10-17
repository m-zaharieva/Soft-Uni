const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const users = [
    {
        id: 'b43xfoskuv4e9yk',
        username: 'mira',
        password: '$2b$09$HNQqt711DQoTmEP.SbEwmucI1Il86UY1grbIaBl7qH4aKxVIrwQcq'
      }
];

function register(username, password) {
    if (users.some(x => x.username == username)) {
        throw { message: 'User already registered!' };
    };

    bcrypt.hash(password, 9)
        .then(hash => {
            let user = { id: uniqid(), username, password: hash };
            users.push(user);
            return user;
        });
}

function login(username, password) {
    console.log(users);
    let user = users.find(x => x.username == username);
    if (!user) {
        throw { message: 'Username or password are incorrect!' };
    };

    return bcrypt.compare(password, user.password);
}

function getUser(username) {
    let user = users.find(x => x.username == username);
    return user;
}

const authService = {
    register,
    login,
    getUser,
}

module.exports = authService;