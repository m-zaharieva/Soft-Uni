import auth from "./services/authService.js";

let section = undefined;

export function initialize(element) {
    section = element;
    
    if(auth.isLogetIn()){
        this.loginUser();
    } else {
        this.logoutUser();
    }
}

export function loginUser() {
    let userWelcome = document.querySelector('#user-welcome');
    userWelcome.textContent = `Welcome, ${auth.getUserName()}`;
    [...section.querySelectorAll('.user')]
        .forEach(el => {
            el.classList.remove('hidden')
        });
    [...section.querySelectorAll('.guest')]
        .forEach(el => {
            el.classList.add('hidden')
        });
}

export function logoutUser() {
    let userWelcome = document.querySelector('#user-welcome');
    userWelcome.textContent = `Welcome, guest`;
    [...section.querySelectorAll('.user')]
        .forEach(el => {
            el.classList.add('hidden')
        });
    [...section.querySelectorAll('.guest')]
        .forEach(el => {
            el.classList.remove('hidden')
        });
}

let navigation = {
    initialize,
    loginUser,
    logoutUser,
}

export default navigation