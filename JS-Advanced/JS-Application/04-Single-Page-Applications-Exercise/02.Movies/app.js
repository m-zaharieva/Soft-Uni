import viewsHandler from "./services/viewsHandler.js";
import addMovie from "./pages/addMovie-page.js";
import home from "./pages/home-page.js";
import login from "./pages/login-page.js";
import nav from "./pages/nav.js";
import register from "./pages/register-page.js";
import movieDetailsPage from "./pages/movieDetails-page.js";
import editMovie from "./pages/editMovie-page.js";


let mainWrapper = document.getElementById('main');
let homePage = document.getElementById('home-page')
let allMovies = document.getElementById('movie');
let navigation = document.getElementById('navigation');
let loginPage = document.getElementById('form-login');
let registrationPage = document.getElementById('form-sign-up');
let editMoviePage = document.getElementById('edit-movie');
let movieDetails = document.getElementById('movie-example');
let addMoviePage = document.getElementById('add-movie');
let allLinks = document.querySelectorAll('.link');

[...mainWrapper.children].forEach(el => el.remove());

setUp()
function setUp() {
    home.initialize(homePage);
    home.getAllMovies(allMovies);
    nav.initialize(navigation);
    viewsHandler.initialize(allLinks);
    login.initialize(loginPage);
    register.initialize(registrationPage);
    addMovie.initialize(addMoviePage);
    movieDetailsPage.initialize(movieDetails);
    editMovie.initialize(editMoviePage);


    viewsHandler.changeView('home')
}






