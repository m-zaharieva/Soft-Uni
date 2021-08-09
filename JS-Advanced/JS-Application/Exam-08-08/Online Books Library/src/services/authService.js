import * as api from './api.js';
import * as requester from './../helpers/ajaxRequester.js';

export function getUserData() {
    if(localStorage.getItem('user') !== null) {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export function login(data) {
    return requester.post(api.loginUrl, data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

export function register(data) {
    return requester.post(api.registerUrl, data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

export function logout() {
    return requester.post(api.logoutUrl)
        .then(() => {
            localStorage.removeItem('user');
        });
}