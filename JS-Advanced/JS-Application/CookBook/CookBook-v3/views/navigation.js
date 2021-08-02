import auth, { isAuthorized } from "../services/auth.js";
import catalog from "./catalog.js";
import create from "./create.js";
import login from "./login.js";
import register from "./register.js";

let section = undefined;


function initialize(domElement) {
    section = domElement;
}

function showView() {
    let guestButtons = section.querySelector('#guest');
    let priveteButtons = section.querySelector('#user');
    if (!isAuthorized()) {
        guestButtons.style.display = 'inline-block';
        priveteButtons.style.display = 'none';
    } else {
        guestButtons.style.display = 'none';
        priveteButtons.style.display = 'inline-block';
    }
    return section;
}

export default {
    initialize,
    showView,
}

export function setUpNavigation() {
    let links = {
        'Login': login.showView,
        'Register': register.showView,
        'Logout': auth.logout,
        'Catalog': catalog.showView,
        'Create Recipe': create.showView,
    }

    section.addEventListener('click', (e) => {
        if (e.target.tagName == 'A') {
            let handler = links[e.target.textContent];
            if (handler) {
                e.preventDefault();
                handler();
            }
        }
    })
}

