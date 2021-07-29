import auth from "../../services/auth.js";
import { loginTamplate } from "./loginTamplate.js";

async function loginFormHandler(context, e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    let user = {
        email, password
    }

    if (email.trim() == '' || password.trim() == '') {
        return alert('Both fields are required!')
    }

    let loginResult = await auth.login(user);
    context.page.redirect('/dashboard');

}

async function getView(context) {
    let boundSubmitHandler = loginFormHandler.bind(null, context);
    let form = {
        loginFormHandler: boundSubmitHandler,
    }

    let viewTemplate = await loginTamplate(form);
    context.renderView(viewTemplate);
}

let login = {
    getView,
}

export default login;