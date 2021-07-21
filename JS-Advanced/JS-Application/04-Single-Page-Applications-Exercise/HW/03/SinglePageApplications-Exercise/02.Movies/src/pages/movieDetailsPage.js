import viewChanger from "../viewChanger.js";

let section = undefined;

function set(domElement) {
    section = domElement;
}

async function getView() {
    try {
        let movieRequest = await fetch(`http://localhost:3030/data/movies/${localStorage.getItem('movie-id')}`);
        let movieResult = await movieRequest.json();

        section.querySelector('h1').textContent = movieResult.title;
        section.querySelector('img').src = movieResult.img;
        section.querySelector('p').textContent = movieResult.description;

        let deleteButton = section.querySelector('#deleteMovie');
        deleteButton.addEventListener('click', deleteMovie);
        let editButton = section.querySelector('#editMovie');

        let likeNumberElement = section.querySelector('#likesNumber');
        likeNumberElement.textContent = `Liked ${await getLikesNumber(localStorage.getItem('movie-id'))}`
        likeNumberElement.style.display = 'none';

        let likeButton = section.querySelector('#like');
        likeButton.style.display = 'none';
        likeButton.addEventListener('click', likeMovie);

        if (movieResult._ownerId === localStorage.getItem('user-id')) {
            deleteButton.style.display = 'inline-block';
            editButton.style.display = 'inline-block';
            likeButton.style.display = 'none';
            likeNumberElement.style.display = 'inline-block';

        } else {
            deleteButton.style.display = 'none';
            editButton.style.display = 'none';
            if (localStorage.getItem('accessToken') !== null) {
                likeButton.style.display = 'inline-block';
            } else {
                likeNumberElement.style.display = 'inline-block';
            }

        }

    } catch (err) {
        console.log(err);
    }

    return section;
}

async function getLikesNumber(movieId) {
    let likesRequest = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
    let likesResult = await likesRequest.json();
    console.log(likesResult);
    return likesResult;
}

async function deleteMovie(e) {
    e.preventDefault();

    try {
        let deleteRequest = await fetch(`http://localhost:3030/data/movies/${localStorage.getItem('movie-id')}`, {
            method: 'delete',
            headers: { 'X-Authorization': localStorage.getItem('accessToken') }
        })
        let deleteResult = await deleteRequest.json();
        viewChanger.navigateTo('home');
        console.log(deleteResult);
    } catch (err) {
        console.log(err);
    }
}

let movieDetailsPage = {
    set,
    getView
}

async function likeMovie(e) {
    e.preventDefault();

    try {
        let likeRequest = await fetch(`http://localhost:3030/data/likes`, {
            method: 'post',
            headers: {
                'X-Authorization': localStorage.getItem('accessToken'),
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    movieId: localStorage.getItem('movie-id')
                }
            )
        });
        let likeResult = await likeRequest.json();

        let likeNumberElement = section.querySelector('#likesNumber');
        likeNumberElement.textContent = `Liked ${await getLikesNumber(localStorage.getItem('movie-id'))}`
        likeNumberElement.style.display = 'inline-block';

        e.target.style.display = 'none';
    } catch (err) {
        console.log(err);
    }

}

export default movieDetailsPage;