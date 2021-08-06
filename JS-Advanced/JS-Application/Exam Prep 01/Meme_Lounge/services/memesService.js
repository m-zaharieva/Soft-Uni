import { getUserData } from "./authService.js";

let baseUrl = 'http://localhost:3030/data/memes';


export function allMemesRequest() {
    return fetch(`${baseUrl}?sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export function memeRequest(id) {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then (data => {return data});
}

export async function createRequest(body, token) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify(body)
    });
}

export function editRequest(body, id, token) {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json', 'X-Authorization': token},
        body: JSON.stringify(body),
    });
}

export function deleteRequest(id) {
    let token = getUserData().accessToken;
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token }
    });
}

export function profileRequest(query) {
    let token = getUserData().accessToken;
    return fetch(`${baseUrl}?${query}`, {
        method: 'GET', 
        headers: {'Content-Type':'application/json', 'X-Authorization': token}
    })
        .then(res => res.json());
}