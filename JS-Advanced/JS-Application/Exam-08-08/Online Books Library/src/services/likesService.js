import * as api from './api.js';
import * as requester from './../helpers/ajaxRequester.js';

export function addLikes(body) {
    return requester.post(api.likesUrl, body);
}

export function likesCount(bookId) {
    return requester.get(`${api.likesUrl}?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}

export function currentUserLikeSpecificBook(bookId, userId) {
    return requester.get(`${api.likesUrl}?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}