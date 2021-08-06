import { renderNotification, renderPage } from "../../helpers/renderHtml.js";
import { loginRequest } from "../../services/authService.js";
import { notificationsTemplate } from "../notifications/notificationsTemplate.js";
import notificationsView from "../notifications/notificationsView.js";
import { loginTemplate } from "./loginTemplate.js";


async function getView(context) {
    let templateResult = await loginTemplate((e) => loginHandler(context, e));
    renderPage(templateResult);
}

function loginHandler(context, e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let email = formData.get('email');
    let password = formData.get('password');

    if (email.trim() == '' || password.trim() == '') {
        notificationsView.getView('Both fields are required!');
        return;
    }

    let user = { email, password };
    loginRequest(user)
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