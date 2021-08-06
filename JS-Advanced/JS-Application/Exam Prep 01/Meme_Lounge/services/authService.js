let baseUrl = 'http://localhost:3030/users';

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function isSignedIn() {
    return Boolean(localStorage.getItem('user'));
}

export async function loginRequest(user) {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
}

export async function registerRequest(user) {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
}

export async function logoutRequest(token) {
    return fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token }
    })
    .then(x => localStorage.clear());
    
}

