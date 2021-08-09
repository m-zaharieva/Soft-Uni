import * as api from './api.js';
import * as requester from './../helpers/ajaxRequester.js';

export function getAllBooks() {
    return requester.get(`${api.allBooksUrl}?sortBy=_createdOn%20desc`);
}

export function getOneBook(id) {
    return requester.get(`${api.allBooksUrl}/${id}`);
}

export function createBook(body) {
    return requester.post(api.allBooksUrl, body);
}

export function editBook(id, body) {
    return  requester.put(`${api.allBooksUrl}/${id}`, body);
}

export function deleteBook(id) {
    return  requester.del(`${api.allBooksUrl}/${id}`);
}

export function getOwnBooks(userId) {
    return requester.get(`${api.allBooksUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
