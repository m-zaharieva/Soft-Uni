let baseUrl = 'http://localhost:3030/users';
function isLoggedIn() {
    return localStorage.getItem('accessToken') !== null;
}

function getToken() {
    return localStorage.getItem('accessToken');
}

function getUsername() {
    return localStorage.getItem('email');
}

function getUserId() {
    return localStorage.getItem('userId');
}

async function login(user) {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    let data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('username', data.email);
    localStorage.setItem('userId', data._id);
    return data;
}

async function register(user) {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    let data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('username', data.email);
    localStorage.setItem('userId', data._id);
    return data;
}

async function logout() {
    await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'applicatio9n/json',
            'X-Authorization': getToken(),
        }
    });

    localStorage.clear();
}



export default {
    isLoggedIn,
    getToken,
    getUsername,
    getUserId,
    login,
    register,
    logout,
}