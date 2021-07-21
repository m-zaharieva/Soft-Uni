import auth from "../services/authService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

export function initialize(element) {
    section = element;
    let form = section.querySelector('form');
    form.addEventListener('submit', sendRequest)
}

export function getView() {
    return section
}

async function sendRequest(e) {
    e.preventDefault();

    try {
        let form = e.target
        let dataForm = new FormData(form);

        let email = dataForm.get('email');
        let password = dataForm.get('password');
        let repPassword = dataForm.get('repeatPassword');

        if (email.trim() === '' && password.trim() === '') {
            alert('Fields cannot be empty!!!')
            return
        }

        if (password.length < 6) {
            alert('Password too short, shoud be at least 6 characters!!!');
            return;
        }

        if(password !== repPassword){
            alert('Passwords don\'t match!!!');
            return
        }

        let userIndo = {
            email,
            password,
        }

        await auth.register(userIndo);
        form.reset();
        viewFinder.navigateTo('home');

    } catch (error) {
        alert(error);
    }

}

let registerPage = {
    initialize,
    getView
}

export default registerPage