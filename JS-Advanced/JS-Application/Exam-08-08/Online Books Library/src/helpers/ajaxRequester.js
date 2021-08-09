import * as authService from './../services/authService.js';

function requester(method, url, data) {
    let options = {};
    let user = authService.getUserData();

    if (method !== 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
    }

    if (user) {
        options.headers = {
            ...(options.headers),
            'X-Authorization': user.accessToken,
        }
    }

    return fetch(url, options)
        .then(res => {
            if (res.url.endsWith('logout')) {
                return res;
            }
            return res.json();
        });
}

export const get = requester.bind(null, 'GET');
export const put = requester.bind(null, 'PUT');
export const post = requester.bind(null, 'POST');
export const del = requester.bind(null, 'DELETE');