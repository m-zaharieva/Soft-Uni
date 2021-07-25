import auth from "../../Innos/02Movies/src/services/authService.js";
import { ce } from "../helpers/htmlBiulder.js";
import eventHandler from "../services/eventHandler.js";
import httpRequests from "../services/httpRequests.js";

let section = undefined;

function initialize(domElement) {
    section = domElement;
}

function getView() {
    return section;
}

async function getAllMovies(domElement) {
    let data = await httpRequests.getAllMovies();
    let cardsDeckDiv = domElement.querySelector('.card-deck');
    [...cardsDeckDiv.children].forEach(el => el.remove());
    data.forEach(movie => {
        let tempMovie = createMovieHtml(movie);
        cardsDeckDiv.append(tempMovie);
    });

}


function createMovieHtml(movie) {
    let movieImg = ce('img', { class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' });
    let cardBodyDiv = ce('div', { class: 'card-body' }, ce('h4', { class: 'card-title' }, movie.title));
    let detailsButton = ce('button', {type: 'button', class: 'btn btn-info'}, 'details');
    let aLink = ce('a', { class: 'link', "data-route": `details/${movie._id}`, href: `#/details/${movie._id}` });

    if (auth.isLoggedIn) {
        aLink.append(detailsButton);
    }
    aLink.addEventListener('click', eventHandler.movieDetails);
    let cardFooterDiv = ce('div', { class: 'card-footer' }, aLink);
    let movieCardDiv = ce('div', { class: 'card mb-4 movie', 'data-owner-id': movie._ownweId, 'data-movie-id': movie._id }, movieImg, cardBodyDiv, cardFooterDiv);
    return movieCardDiv;
}



let home = {
    initialize,
    getView,
    getAllMovies,
}

export default home;