import auth from "../services/authService.js";
import viewFinder, { redirectTo } from "../viewFinder.js";

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

        let userIndo = {
            email,
            password,
        }

        await auth.login(userIndo);
        form.reset();
        viewFinder.navigateTo('home');

    } catch (error) {
        alert(error);
        redirectTo(loginPage)
    }

}

let loginPage = {
    initialize,
    getView
}

export default loginPage