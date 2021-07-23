import viewsHandler from "./helpers/viewsHandler.js";
import home from "./pages/home-page.js";
import nav from "./pages/nav.js";


let mainWrapper = document.getElementById('main');
let homePage = document.getElementById('home-page')
let allMovies = document.getElementById('movie');
let navigation = document.getElementById('navigation');
let loginPage = document.getElementById('form-login');
let registrationPage = document.getElementById('form-sign-up');
let edinMoviePage = document.getElementById('edit-movie');
let movieDetailsPage = document.getElementById('movie-example');
let addMovie = document.getElementById('add-movie');
let allLinks = document.querySelectorAll('.link');

[...mainWrapper.children].forEach(el => el.remove());

setUp()
function setUp() {
    home.initialize(homePage);
    nav.initialize(navigation);
    viewsHandler.initialize(allLinks);


    viewsHandler.changeView('home', mainWrapper)
}






