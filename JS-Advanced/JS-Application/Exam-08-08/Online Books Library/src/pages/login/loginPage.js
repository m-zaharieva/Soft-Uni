import { loginTemplate } from "./loginTemplate.js";


let _router = undefined;
let _render = undefined;
let _authService = undefined;

function initialize(router, render, authService) {
    _router = router;
    _render = render;
    _authService = authService;
}

function getView(ctx) {
    let templateResult = loginTemplate(submitHandler);
    _render(templateResult);
}

function submitHandler(e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.currentTarget));
    if (formData.email.trim() == '' || formData.password.trim() == '') {
        return alert('All fileds are required!');
    }

    _authService.login(formData)
        .then(data => {
            _router.redirect('/dashboard');
        });
}

export default {
    initialize,
    getView,
}