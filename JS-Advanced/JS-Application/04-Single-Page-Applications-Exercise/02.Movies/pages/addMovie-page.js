import eventHandler from "../services/eventHandler.js";

let section = undefined;

function initialize(domElement) {
    section = domElement;
    let form = section.querySelector('#add-movie-form');
    form.addEventListener('submit', eventHandler.addMovieHandler)
}

function getView() {
    return section;
}

let addMovie = {
    initialize,
    getView,
}

export default addMovie;