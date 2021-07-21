import viewChanger from "../viewChanger.js";

let section = undefined;

function set(domElement) {
    section = domElement;
    let form = section.querySelector('form');
    form.addEventListener('submit', addMovie);
}

async function addMovie(e) {
    e.preventDefault();

    let form = e.target;
    let data = new FormData(form);

    let title = data.get('title');
    let description = data.get('description');
    let img = data.get('imageUrl');
    let _ownerId = localStorage.getItem('user-id');

    let newMovie = {
        title,
        description,
        img,
        _ownerId
    }

    if (title === '' || description === '' || img === '') {
        alert('The title, description and image shouldn’t be empty!');
        return;
    }
    try {
        let createMovieRequest = await fetch('http://localhost:3030/data/movies', {
            method: 'post',
            headers: { 'Content-type': 'application/json', 'X-Authorization': localStorage.getItem('accessToken') },
            body: JSON.stringify(newMovie)
        })
        let createMovieResult = await createMovieRequest.json();
        console.log(createMovieResult);
        form.reset();
        viewChanger.navigateTo('home');
    } catch (err) {
        console.log(err);
    }
}

async function getView() {
    return section;
}

let addMoviePage = {
    set,
    getView
}

export default addMoviePage;