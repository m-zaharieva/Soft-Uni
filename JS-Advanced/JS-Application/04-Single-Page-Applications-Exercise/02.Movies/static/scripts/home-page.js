import movieDescription from './movieDescription.js';
import changeViews from '../../changeViews.js';

let addMovieButton = document.getElementById('add-movie-button');
addMovieButton.addEventListener('click', showAddMovieView);

function showAddMovieView() {
    changeViews.showAddMovie();
}

async function getMovies() {
    let moviesSection = document.getElementById('movie');
    let deckHolder = moviesSection.querySelector('.card-deck');
    deckHolder.addEventListener('click', showDetails);
    let cards = moviesSection.querySelectorAll('.card').forEach(el => el.remove());

    let response = await fetch('http://localhost:3030/data/movies');
    let data = await response.json();
    data.forEach(movie => {
        let newMovie = createCard(movie);
        deckHolder.appendChild(newMovie);
    })

}

function showDetails(e) {
    let currentCard = e.target.closest('.card');
    let id = currentCard.dataset.movieId;
    if (e.target.tagName == 'BUTTON') {
    movieDescription(id)
    }
}

function createCard(data) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-4');
    cardDiv.dataset.ownerId = data._ownerId;
    cardDiv.dataset.movieId = data._id;

    let image = document.createElement('img');
    image.classList.add('card-img-top')
    image.alt = 'Card image cap';
    image.width = '400';
    image.src = data.img;

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    let headingFour = document.createElement('h4');
    headingFour.classList.add('card-title');
    headingFour.textContent = data.title;

    let cardFooterDiv = document.createElement('div');
    cardFooterDiv.classList.add('card-footer');

    let link = document.createElement('a');
    link.href = '#';

    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-info');
    button.textContent = 'Details';

    link.appendChild(button);
    cardFooterDiv.appendChild(link);
    cardBodyDiv.appendChild(headingFour);
    cardDiv.appendChild(image);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooterDiv);

    return cardDiv;
}

export default {getMovies};