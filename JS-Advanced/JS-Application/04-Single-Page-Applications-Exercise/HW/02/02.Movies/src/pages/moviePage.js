import { createHtmlElement } from "../helpers/htmlHelper.js";
import auth from "../services/authService.js";
import { request } from "../services/jsonRequests.js";
import viewFinder from "../viewFinder.js";

let section = undefined;
let linkClass = undefined

export function initialize(element, viewLinkClass) {
    section = element;
    linkClass = viewLinkClass;
}

export async function getView(movieId) {

    try {
        let moviePromise = await request(`http://localhost:3030/data/movies/${movieId}`);
        let userId = auth.getUserId();
        let userLiksPromise = await request(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
        let likesPromise = await request(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
        let [movie, userLikesArr, likes] = await Promise.all([moviePromise, userLiksPromise, likesPromise]);

        let userCanLike = true;

        if (userLikesArr.length > 0 || userId === movie._ownerId) {
            userCanLike = false;
        }

        let movieHtml = creatMovieHtml(movie, userCanLike, likes);
        let movieContainer = section.querySelector('.container');
        movieContainer.querySelectorAll('.movie-details').forEach(movie => movie.remove());
        movieContainer.appendChild(movieHtml);

        return section

    } catch (error) {
        alert(error);
    }
}

export async function deleteMovie(movieId) {

    try {
        let deleteResp = await request(`http://localhost:3030/data/movies/${movieId}`, 'Delete', undefined, true);
        return viewFinder.redirectTo('home');

    } catch (error) {
        alert(error);
    }
}

export async function likesMovie(movieId){
    
    try {
        let bodyRequest = {movieId: movieId};

    let likesResult = await request('http://localhost:3030/data/likes', 'Post', bodyRequest, true);
    let movieLikes = await request(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);

    let likeButton = section.querySelector('.like');
    likeButton.remove;

    let likeSpan = section.querySelector('.likes');
    likeSpan.textContent = `Liked: ${movieLikes}`;

    return viewFinder.redirectTo('details', movieId);

    } catch (error) {
        alert(error);
    }
}

function creatMovieHtml(movie, userCanLike, movieLikes){
    let movieHeading = createHtmlElement('h1', undefined, `Movie title: ${movie.title}`);

    let movieImg = createHtmlElement('img', { class: 'img-thumbnail', src: movie.img, alt: 'Movie' });
    let imgDiv = createHtmlElement('div', { class: 'col-md-8' }, movieImg);

    let descriptionHeading = createHtmlElement('h3', { class: 'my-3' }, 'Movie Description');
    let descriptionP = createHtmlElement('p', undefined, movie.description);

    let deleteButton = createHtmlElement('a', { class: `btn btn-danger delete ${linkClass}`, 'data-route': `delete/${movie._id}`, href: `#/delete/${movie._id}` }, 'Delete');
    deleteButton.addEventListener('click', viewFinder.navigationHandler);

    let editButton = createHtmlElement('a', { class: `btn btn-warning ${linkClass}`, 'data-route': `edit/${movie._id}`, href: `#/edit/${movie._id}` }, 'Edit');
    editButton.addEventListener('click', viewFinder.navigationHandler);

    let likeButton = createHtmlElement('a', { class: `btn btn-primary like ${linkClass}`, 'data-route': `like/${movie._id}`, href: `#/like/${movie._id}` }, 'Like');
    likeButton.addEventListener('click', viewFinder.navigationHandler);

    let likeSpan = createHtmlElement('span', { class: 'enrolled-span likes' }, `Liked: ${movieLikes}`);
    let descriptionDiv = createHtmlElement('div', { class: 'col-md-4 text-center' }, descriptionHeading, descriptionP);

    if(auth.getUserId() === movie._ownerId){
        descriptionDiv.appendChild(deleteButton);
        descriptionDiv.appendChild(editButton);
    }

    if(userCanLike){
        descriptionDiv.appendChild(likeButton);
    }

    descriptionDiv.appendChild(likeSpan);

    let movieDiv = createHtmlElement('div', { class: 'row bg-light text-dark movie-details', 'data-id': `${movie._id}` }, movieHeading, imgDiv, descriptionDiv);

    return movieDiv
}

let moviePage = {
    initialize,
    getView,
    deleteMovie,
    likesMovie
}

export default moviePage