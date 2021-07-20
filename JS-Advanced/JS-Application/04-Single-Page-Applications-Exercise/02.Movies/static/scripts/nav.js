import changeViews from '../../changeViews.js';
import logOut from './logout.js';

function initialize(domElement) {
    let currentSesion = localStorage.getItem('userToken');
    let logedUserEmail = localStorage.getItem('userEmail');

    let headerLinks = document.querySelectorAll('li').forEach(el => el.classList.add('hidden'));
    let guestsLinks = domElement.querySelectorAll('.guest');
    let logedinLinks = domElement.querySelectorAll('.loged-in');
    let greetingNote = document.querySelector('.greeting');


    if (currentSesion === null) {
        guestsLinks.forEach(li => li.classList.remove('hidden'));
        logedinLinks.forEach(li => li.classList.add('hidden'));

    } else if (currentSesion !== null) {
        guestsLinks.forEach(li => li.classList.add('hidden'));
        logedinLinks.forEach(li => li.classList.remove('hidden'));
        greetingNote.textContent = `Welcome, ${logedUserEmail}`;
    }
}

let navigation = document.querySelector('#navigation');
navigation.addEventListener('click', getView);

function getView(e) {    
    if (e.target.tagName == 'A' && e.target.textContent === 'Login') {
        changeViews.showLoginPage();
    } else if (e.target.tagName == 'A' && e.target.textContent === 'Register') {
        changeViews.showRegisterPage();
    } else if (e.target.tagName == 'A' && e.target.textContent === 'Movies') {
        changeViews.showHomePage();
    } else if (e.target.tagName == 'A' && e.target.textContent === 'Logout') {
        logOut();
    }
}


export default {
    initialize,
}