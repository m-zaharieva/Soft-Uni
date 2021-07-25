import { ce } from "../helpers/htmlBiulder.js";
import eventHandler from "../services/eventHandler.js";

let section = undefined;
function initialize(domElement) {
    section = domElement;
}

function getView() {
    return section;
}

function createDetailsPage(movie) {
    let headingOne = ce('h1', undefined, `Movie title: ${movie.title}`);

    let movieImg = ce('img', { class: 'img-thumbnail', src: `${movie.img}`, alt: 'Movie' });
    let imageDiv = ce('div', { class: 'col-md-8' }, movieImg);

    let headingThree = ce('h3', { class: 'my-3' }, 'Movie Description');
    let descriptionParagraph = ce('p', {class: "description"}, movie.description);

    let userId = localStorage.getItem('userId');
    let accessToken = localStorage.getItem('accessToken');
    let ownerId = movie._ownerId;

    let deleteButton = ce('a', { class: 'btn btn-danger', href: '#' }, 'Delete');
    deleteButton.addEventListener('click', eventHandler.deleteButtonHandler);
    let editButton = ce('a', { class: 'btn btn-warning', href: '#' }, 'Edit');
    editButton.addEventListener('click', eventHandler.editButtonHandler);
    let likeButton = ce('a', { class: 'btn btn-primary', href: '#' }, 'Like');
    // likeButton.addEventListener('click', likeMovie);
    let likesSpan = ce('span', { class: 'enrolled-span' }, 'Liked');

    let descriptionDiv;
    if (accessToken !== undefined && userId === ownerId) {
        descriptionDiv = ce('div', { class: 'col-md-4 text-center' }, headingThree, descriptionParagraph, deleteButton, editButton, likesSpan);
    } else if (accessToken !== undefined && userId !== ownerId) {
        descriptionDiv = ce('div', { class: 'col-md-4 text-center' }, headingThree, descriptionParagraph, likeButton, likesSpan);
    }

    let divWrapper = ce('div', { class: 'movie row bg-light text-dark', 'data-owner-id': movie._ownerId, 'data-movie-id': movie._id }, headingOne, imageDiv, descriptionDiv);

    return divWrapper;
}

let movieDetailsPage = {
    createDetailsPage,
    initialize,
    getView,
}

export default movieDetailsPage;