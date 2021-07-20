import navigation from './static/scripts/nav.js';
import login from './static/scripts/login.js';
import registeration from './static/scripts/register.js';
import changeViews from './changeViews.js';
import getMovies from './static/scripts/home-page.js';
import addMovieForm from './static/scripts/addMovie.js';

// main wrapper 
let main = document.getElementById('main');

// navigation 
let navigationElement = document.getElementById('navigation');

// home view 
let homePage = document.getElementById('home-page');
let titleMovie = homePage.nextElementSibling;
let addMovieButton = document.getElementById('add-movie-button');
let movieSection = document.getElementById('movie');

// add movie view
let addMovie = document.getElementById('add-movie');

// edit movie view
let editMovie = document.getElementById('edit-movie');

// login view
let loginForm = document.getElementById('form-login');

// register view
let registracionForm = document.getElementById('form-sign-up');

let movieExample = document.getElementById('movie-example');

Array.from(main.children).forEach(el => el.remove());


function setup() {
    addMovieForm()
    changeViews.showHomePage();
    getMovies.getMovies()
    navigation.initialize(navigationElement);
    login.initialize(loginForm);
    registeration.initialize(registracionForm);
   
}
setup()


