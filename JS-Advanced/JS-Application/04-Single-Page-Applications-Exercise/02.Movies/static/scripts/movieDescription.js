import changeViews from '../../changeViews.js';

async function movieDescription(id) {
    changeViews.showMovieDescription();
    let movieExample = document.getElementById('movie-example');
    let rowDiv = movieExample.querySelector('.container');
    Array.from(rowDiv.children).forEach(el => el.remove());

    let response = await fetch(`http://localhost:3030/data/movies/${id}`);
    let data = await response.json();
    console.log(data);
    let currentMovie = createMovie(data);
    rowDiv.appendChild(currentMovie);
}

function createMovie(data) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('row', 'bg-light', 'text-dark');
    wrapper.dataset.movieId = data._id;
    wrapper.dataset.ownerId = data._ownerId;


    let headingOne = document.createElement('h1');
    headingOne.textContent = `Movie title: ${data.title}`;

    let imageDiv = document.createElement('div');
    imageDiv.classList.add('col-md-8');

    let image = document.createElement('img');
    image.classList.add('img-thumbnail');
    image.src = data.img;
    image.alt = 'Movie';

    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('col-md-4', 'text-center');

    let headingThree = document.createElement('h3');
    headingThree.textContent = 'Movie Description';

    let descriptionP = document.createElement('p');
    descriptionP.textContent = data.description;

    let deleteLink = document.createElement('a');
    deleteLink.classList.add('btn', 'btn-danger');
    deleteLink.addEventListener('click', deleteMovie);
    deleteLink.textContent = 'Delete';
    deleteLink.href = '#';

    let editLink = document.createElement('a');
    editLink.classList.add('btn', 'btn-warning');
    // editLink.addEventListener('click', editMovie);
    editLink.textContent = 'Edit';
    editLink.href = '#';

    let likeLink = document.createElement('a');
    likeLink.classList.add('btn', 'btn-primary');
    // likeLink.addEventListener('click', likeMovie);
    likeLink.textContent = 'Like';
    likeLink.href = '#';

    let span = document.createElement('span');
    span.classList.add('enrolled-span');
    span.textContent = 'Liked';

    wrapper.appendChild(headingOne);
    imageDiv.appendChild(image);
    wrapper.appendChild(imageDiv);
    descriptionDiv.appendChild(headingThree);
    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.appendChild(deleteLink);
    descriptionDiv.appendChild(editLink);
    descriptionDiv.appendChild(likeLink);
    descriptionDiv.appendChild(span);
    wrapper.appendChild(descriptionDiv);

    return wrapper;
}

async function deleteMovie(e) {
    let rowDiv = e.target.closest('.row');
    console.log(rowDiv);
    let id = rowDiv.dataset.movieId;
    let owner = rowDiv.dataset.ownerId;
    console.log(id);
    
    if (owner == localStorage.getItem('ownerId')) {
        let response = await fetch(`http://localhost:3030/data/movies/${id}`, {
            method: 'Delete', 
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('userToken'),
            }
        });
        console.log(response);
    }
}


export default movieDescription;