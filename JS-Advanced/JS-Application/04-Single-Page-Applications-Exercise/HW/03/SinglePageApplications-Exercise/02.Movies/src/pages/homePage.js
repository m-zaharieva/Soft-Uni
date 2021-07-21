import viewChanger from "../viewChanger.js";

let section = undefined;
let movieTemplate = document.querySelector('#movie .card');
movieTemplate.style.display = 'none';
let moviesContainer = document.getElementById('movies-container');

function set(domElement) {
    section = domElement;
}

async function getView() {
    if (localStorage.getItem('accessToken') === null) {
        section.querySelector('#add-movie-button').classList.add('hidden');
    } else {
        section.querySelector('#add-movie-button').classList.remove('hidden');
    }

    loadMovies();
    return section;
}

async function loadMovies() {
    moviesContainer.innerHTML = '';

    try {
        let moviesRequest = await fetch('http://localhost:3030/data/movies');
        let moviesResult = await moviesRequest.json();

        moviesResult.forEach(movie => {
            let newMovieHtml = movieTemplate.cloneNode(true);
            newMovieHtml.style.display = 'block';

            newMovieHtml.querySelector('img').src = movie.img;
            newMovieHtml.querySelector('h4').textContent = movie.title;

            let detailsButton = newMovieHtml.querySelector('button');
            detailsButton.addEventListener('click', viewChanger.changeView);

            // if (localStorage.getItem('accessToken') === null || localStorage.getItem('accessToken') === undefined){
            //     detailsButton.disabled = true;
            // } else {
            //     detailsButton.disabled = false;
            // }
            newMovieHtml.querySelector('button').setAttribute('movie-id', movie._id);

            document.querySelector('#movie .card-deck').appendChild(newMovieHtml);
        });

    } catch (err) {
        console.log(err);
    }

}

let homePage = {
    set,
    getView
}

export default homePage;