import auth from "../../services/auth.js";
import { regTemplate } from "./registerTemplate.js";

async function registerFormHandler(context, e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    let rePass = form.get('rePass');
    let user = {
        email, password
    }

    if (email.trim() === '' || password.trim() === '' || rePass.trim() === '') {
        return alert('All fields are required!');
    } else if (password !== rePass) {
        return alert('Both passwords should be equal!')
    }
    
    let registerResult = await auth.register(user);
    context.page.redirect('/dashboard');

}

async function getView(context) {
    let boundSubmitHandler = registerFormHandler.bind(null, context);
    let form = {
        registerFormHandler: boundSubmitHandler,
    }

    let viewTemplate = await regTemplate(form);
    context.renderView(viewTemplate);
}

let register = {
    getView,
}

export default register;