let baseUrl = 'http://localhost:3030';
let loginUrl = '/users/login';
let registerUrl = '/users/register';
let moviesUrl = '/data/movies';
let logoutUrl = '/users/logout';

async function loginForm(body) {
    let response = await fetch(`${baseUrl}${loginUrl}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    return data;
}

async function registerForm(body) {
    let response = await fetch(`${baseUrl}${registerUrl}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    return data;
}

async function addMovieForm(body, token) {
    let response = await fetch(`${baseUrl}${moviesUrl}`, {
        method: 'POST', 
        headers: {
            'X-Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    
    let ownerId = data._ownerId;
    let movieId = data._id;
}

async function logoutRequest(body, token) {
    await fetch(`${baseUrl}${logoutUrl}`, {
        method: 'GET', 
        headers: {
            'X-Authorization': token,
            'Content-Type': 'application/json'
        }
    });
}

async function getAllMovies() {
    let response = await fetch(`${baseUrl}${moviesUrl}`);
    let data = await response.json();
    return data;
}

async function getMovieDetails(movieId) {
    let response = await fetch(`${baseUrl}${moviesUrl}/${movieId}`);
    let data = await response.json();
    return data;
}

async function editMovieRequest(body, id) {
    let token = localStorage.getItem('accessToken');
    let response = await fetch(`${baseUrl}${moviesUrl}/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        }, 
        body: JSON.stringify(body)
    });
    let data = await response.json();
    return data;
}

async function deleteRequest(id) {
    let token = localStorage.getItem('accessToken');
    let response = await fetch(`${baseUrl}${moviesUrl}/${id}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        }, 
    });
}

let httpRequests = {
    loginForm,
    registerForm,
    addMovieForm,
    logoutRequest,
    getAllMovies, 
    getMovieDetails,
    editMovieRequest,
    deleteRequest,
}

export default httpRequests;