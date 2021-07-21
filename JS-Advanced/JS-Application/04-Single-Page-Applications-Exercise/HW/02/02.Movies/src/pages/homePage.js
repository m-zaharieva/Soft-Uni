import { createHtmlElement } from "../helpers/htmlHelper.js";
import auth from "../services/authService.js";
import { request } from "../services/jsonRequests.js";
import viewFinder from "../viewFinder.js";

let section = undefined;
let addMovieButton = undefined;

export function initialize(element) {
    section = element;
    addMovieButton = section.querySelector('#add-movie-btn');
}

export async function getView(){
    await getAllMovies();
    return section
}

function createHtmlMovie(movie) {

    let imgMovie = createHtmlElement('img', { class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' });
    let divMoviCard = createHtmlElement('div', { class: 'card-body' }, createHtmlElement('h4', { class: 'card-title' }, movie.title));

    let detailsButton = createHtmlElement('button', { type: 'button', class: 'btn btn-info' }, 'Details');
    let anchorLink = createHtmlElement('a', { class: 'link', "data-route": `details/${movie._id}`, href: `#/details/${movie._id}` });

    if (auth.isLogetIn()) {
        anchorLink.appendChild(detailsButton);
    }

    anchorLink.addEventListener('click', viewFinder.navigationHandler);
    let cardFooterDiv = createHtmlElement('div', { class: 'card-footer' }, anchorLink);
    let movieCardDiv = createHtmlElement('div', { class: 'card mb-4 movie' }, imgMovie, divMoviCard, cardFooterDiv);

    return movieCardDiv;
}

async function getAllMovies() {

    try {
        let movies = await request('http://localhost:3030/data/movies');
        let movieContainer = section.querySelector('#home-movies-container');
        movieContainer.querySelectorAll('.movie').forEach(m => m.remove());

        if(!auth.isLogetIn()) {
            addMovieButton.remove();
        } else {
            let moviesHeading = section.querySelector('#movies-heading');
            moviesHeading.after(addMovieButton);
        }
        movieContainer.append(...movies.map(movie => createHtmlMovie(movie)));

    } catch (error) {
        alert(error)
    }

}

let homePage = {
    initialize,
    getView
}

export default homePage