let baseUrl = 'http://localhost:3030/data/cars';

function getAll() {
    return fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
}

function create(carData, token) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify(carData),
    });
}

function getDetails(id) {
    return fetch(`${baseUrl}/${id}`);
}

function updateItem(id, token, body) {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify(body),
    });
}

function deleteItem(id, token) {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
    });
}

function myItems(userId) {
    return fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export default {
    getAll,
    create,
    getDetails,
    updateItem,
    deleteItem,
    myItems,
}