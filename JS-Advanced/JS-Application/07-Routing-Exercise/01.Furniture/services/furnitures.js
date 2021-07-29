import auth from "./auth.js";

let baseUrl = 'http://localhost:3030/data/catalog';

export async function getAllFurnitures() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    return data;
}


export async function createFurniture(furnitureBody) {
    let response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': auth.getToken(),
        },
        body: JSON.stringify(furnitureBody)
    });
    let data = await response.json();
    return data;
}


export async function getFurniture(id) {
    let response = await fetch(`${baseUrl}/${id}`);
    let data = await response.json();
    return data;
}

export async function editFurniture(id, body) {
    let response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': auth.getToken(),
        },
        body: JSON.stringify(body),
    });
    let data = await response.json();
    return data;
}

export async function deleteFurniture(id) {
    let response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': auth.getToken(),
        }
    });
    let data = await response.json();

    return data;
}

export async function getMyFurnitures() {
    let response = await fetch(`${baseUrl}?where=_ownerId%3D%22${auth.getUserId()}%22 `);
    let data = await response.json();
    console.log(data);
    return data;
}