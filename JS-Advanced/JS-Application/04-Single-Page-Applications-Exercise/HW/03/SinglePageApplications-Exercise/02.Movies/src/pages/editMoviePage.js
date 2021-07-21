import viewChanger from "../viewChanger.js";

let section = undefined;

function set(domElement) {
    section = domElement;
    let form = section.querySelector('form');

    form.addEventListener('submit', editMovie);

}

async function editMovie(e) {
    e.preventDefault();
    let form = e.target;
    let data = new FormData(form);
    let title = data.get('title');
    let description = data.get('description');
    let img = data.get('imageUrl');
    let _ownerId = localStorage.getItem('user-id');

    let edited = {
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
        let editMovieRequest = await fetch(`http://localhost:3030/data/movies/${localStorage.getItem('movie-id')}`, {
            method: 'put',
            headers: { 'Content-type': 'application/json', 'X-Authorization': localStorage.getItem('accessToken') },
            body: JSON.stringify(edited)
        })

        viewChanger.navigateTo('movieDetails')
    } catch (err) {
        console.log(err);
    }
}



async function getView() {
    try {
        let movieRequest = await fetch(`http://localhost:3030/data/movies/${localStorage.getItem('movie-id')}`);
        let movieResult = await movieRequest.json();

        section.querySelector('#edit-name').value = movieResult.title;
        section.querySelector('#editDescription').value = movieResult.description;
        section.querySelector('#editImg').value = movieResult.img;
        return section;
    } catch (err) {
        console.log(err);
    }
}

let editMoviePage = {
    set,
    getView
}

export default editMoviePage;