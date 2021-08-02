import login from "../views/login.js";
import navigation from "../views/navigation.js";

let baseUrl = 'http://localhost:3030/users';

export function isAuthorized() {
    return Boolean(localStorage.getItem('accessToken'));
}

export let getToken = () => {
    return localStorage.getItem('accessToken');
}

export let getEmail = () => {
    return localStorage.getItem('email');
}

export let getUserId = () => {
    return localStorage.getItem('id');
}

function loginRequest(user) {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
}

export function logout(e) {
    const token = getToken();
    fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: { 'X-Authorization': token }
    })
        .then(data => {
            localStorage.clear();
            login.showView();
            navigation.showView();
        })
}




export default {
    loginRequest,
    logout
}
