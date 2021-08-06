import { renderPage } from "../../helpers/renderHtml.js";
import { registerRequest } from "../../services/authService.js";
import notificationsView from "../notifications/notificationsView.js";
import { registerTemplate } from "./registerTemplate.js";


async function getView(context) {
    let templateResult = await registerTemplate((e) => registerHandler(context, e));
    renderPage(templateResult);
}


function registerHandler(context, e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let username = formData.get('username');
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPass = formData.get('repeatPass');
    let gender = formData.get('gender');

    if (email.trim() == '' || password.trim() == '' || username.trim() == '' || gender.trim() == '') {
        notificationsView.getView('All fields are required!');
        return;
    }

    let user = { username, email, password, gender };
    registerRequest(user)
        .then(res => res.json())
        .then(data => {
            if (data.hasOwnProperty('code')) {
                notificationsView.getView(data.message);
            } else {
                localStorage.setItem('user', JSON.stringify(data));
                context.page.redirect('/all-memes')
            }
        })
        .catch(error => {
            notificationsView.getView(error);
        })


    form.reset();
}

export default {
    getView,
}