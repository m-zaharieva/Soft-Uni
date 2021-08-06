let baseUrl = 'http://localhost:3030/users';


function getUserData() {
    return localStorage.getItem('user') !== null ? localStorage.getItem('user') : undefined;
}

function logout(token) {
    return fetch(`${baseUrl}/logout`, {
        method: 'GET', 
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
    });
}

function login(body) {
    return fetch(`${baseUrl}/login`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

function register(body) {
    return fetch(`${baseUrl}/register`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

export default {
    getUserData,
    register,
    login,
    logout,
}