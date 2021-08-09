import { login } from "../../services/authService.js";
import { loginTemplate } from "./loginTemplate.js";

let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {
    let templateResult = loginTemplate(submitHandler);
    _render(templateResult);
}

function submitHandler(e) {
    e.preventDefault();

    let userData = Object.fromEntries(new FormData(e.currentTarget));
    login(userData)
        .then(() => {
            _router.redirect('/home');
        });
}

export default {
    initialize,
    getView,
}