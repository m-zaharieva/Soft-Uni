import editMovie from "../pages/editMovie-page.js";
import home from "../pages/home-page.js";
import movieDetailsPage from "../pages/movieDetails-page.js";
import httpRequests from "./httpRequests.js";
import viewsHandler from "./viewsHandler.js";

async function loginHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');

    let body = { email, password };

    let data = await httpRequests.loginForm(body);
    console.log(data);
    let token = data.accessToken;
    let id = data._id;
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userId', id);
    localStorage.setItem('email', email);

    let form = e.target;
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    viewsHandler.changeView('home');
}

async function registerHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('repeatPassword');

    if (email.trim() === '' || password.trim() === '' || rePass.trim() === '') {
        return alert('All fields are required!');
    } else if (password.length < 6) {
        return alert('Password must be 6 characters or more!');
    } else if (password !== rePass) {
        return alert('Password don\'t match!');
    }

    let body = { email, password };

    let data = await httpRequests.registerForm(body);
    let token = data.accessToken;
    localStorage.setItem('accessToken', token);


    let form = e.target;
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    viewsHandler.changeView('home');
}

async function addMovieHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageUrl');

    let body = { title, description, img };
    let token = localStorage.getItem('accessToken');

    let data = await httpRequests.addMovieForm(body, token);
    console.log(data);
    
    let form = e.target;
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    // viewsHandler.changeView('home');
}

async function movieDetails(e) {
    let link = e.target.closest('.link');
    let movieId = link.dataset.route.split('/')[1];
    let movieInfo = await httpRequests.getMovieDetails(movieId);
    let currentMovieHTML = movieDetailsPage.createDetailsPage(movieInfo);

    viewsHandler.changeView('movieDetails', currentMovieHTML, 'container');
}

async function logoutHandler(e) {
    e.preventDefault();
    let token = localStorage.getItem('accessToken');
    await httpRequests.logoutRequest(undefined, token);

    localStorage.clear();
}

async function editButtonHandler(e) {
    let movie = e.target.closest('.movie');
    let movieTitle = movie.querySelector('h1').textContent.split(': ')[1];
    let movieDescription = movie.querySelector('.description').textContent;
    let movieImg = movie.querySelector('.img-thumbnail').src;
    let movieId = movie.dataset.movieId;
    console.log(movieId);

    let section = editMovie.getView();
    let form = section.querySelector('#edit-form');
    form.dataset.movieId = movieId;
    form.addEventListener('submit', editHandler);

    let tilteInput = form.querySelector('input[name=title]');
    tilteInput.value = movieTitle;
    let descriptionInput = form.querySelector('textarea[name=description]');
    descriptionInput.value = movieDescription;
    let imageInput = form.querySelector('input[name=imageUrl]');
    imageInput.value = movieImg;
    viewsHandler.changeView('edit-movie');
    
}

async function editHandler(e) {
    e.preventDefault();
    let form = e.target;
    let movieId = form.dataset.movieId;
    let formData = new FormData(form);
    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageUrl');
    let body = { title, description, img };

    let data = await httpRequests.editMovieRequest(body, movieId);
    
    let homeSection = home.getView();
    let currentMovieCard = homeSection.querySelector(`[data-movie-id=${movieId}]`);
    currentMovieCard.querySelector('.card-title').textContent = title;
    currentMovieCard.querySelector('.card-img-top').src = img;
    
    viewsHandler.changeView('home');
}

async function deleteButtonHandler(e) {
    let movie = e.target.closest('.movie');
    let currentMovieId = movie.dataset.movieId;
    httpRequests.deleteRequest(currentMovieId);

    let homeSection = home.getView();
    let movies = homeSection.querySelector('#movie');
    let currentMovieCard = movies.querySelector(`[data-movie-id=${currentMovieId}]`);
    currentMovieCard.remove();

    viewsHandler.changeView('home');
}

let eventHandler = {
    loginHandler, 
    registerHandler,
    addMovieHandler,
    logoutHandler,
    movieDetails,
    editButtonHandler, 
    editHandler, 
    deleteButtonHandler
}
 
export default eventHandler;