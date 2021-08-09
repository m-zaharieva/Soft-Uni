import { register } from "../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";

let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {
    let templateResult = registerTemplate(submitHandler);
    _render(templateResult);
}

function submitHandler(e) {
    e.preventDefault();

    let userData = Object.fromEntries(new FormData(e.currentTarget));
    register(userData)
        .then(() => {
            _router.redirect('/home');
        });
}

export default {
    initialize,
    getView,
}