import catalog, { createRecipePreview } from "../views/catalog.js";
import { getToken } from "./auth.js";

let baseUrl = 'http://localhost:3030/data/recipes';

// load all recipes 
function getRecipes() {
    return fetch(baseUrl)
        .then(res => res.json());
}


// create a recipe
function createRecipe(body) {
    return fetch(`${baseUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': getToken() },
        body: JSON.stringify(body),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            catalog.showView();
        })
}

// get Details of a recipe
export function getDetails(id) {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
}

export function updateRecipe(body, id) {
    console.log(id);
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken(),
        },
        body: JSON.stringify(body),
    })
        .then(res => res.json());
}

export function deleteRequest(id) {
    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': getToken() },
    })
}



export default {
    getRecipes,
    createRecipe
}
