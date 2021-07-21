import homePage from "./pages/homePage.js";
import addMoviePage from "./pages/addMoviePage.js";
import editMoviePage from "./pages/editMoviePage.js";
import loginPage from "./pages/loginPage.js";
import movieDetailsPage from "./pages/movieDetailsPage.js";
import registerPage from "./pages/registerPage.js";
import viewChanger from "./viewChanger.js";
import nav from "./pages/nav.js";
import logout from "./pages/logout.js";

async function setUpPagesViews() {
    let mainElement = document.querySelector('main');

    localStorage.clear()
    //Сложил да ми чисти localStorage при всяко пускане, понеже
    //ако спра сървъра и не се е изчистил localStorage, при следващо пускане на сървъра
    //последно логнатият ми user стои логнат, но токена му не е валиден вече и дава грешка при някои заявки
    
    homePage.set(document.getElementById('home-page'));
    addMoviePage.set(document.getElementById('add-movie'));
    editMoviePage.set(document.getElementById('edit-movie'));
    loginPage.set(document.getElementById('form-login'));
    registerPage.set(document.getElementById('form-sign-up'));
    movieDetailsPage.set(document.getElementById('movie-example'));
    nav.updateNav();
    logout.set(document.querySelector('ul li:nth-child(2)'));

    viewChanger.initialize(document.querySelectorAll('.route-link'));
    viewChanger.navigateTo('home');
}

setUpPagesViews();