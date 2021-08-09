import { registerTemplate } from "./registerTemplate.js";


let _router = undefined;
let _render = undefined;
let _authService = undefined;

function initialize(router, render, authService) {
    _router = router;
    _render = render;
    _authService = authService;

}

function getView(ctx) {
    let templateResult = registerTemplate(submitHandler);
    _render(templateResult);
}

function submitHandler(e) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.currentTarget));
    if (formData.email.trim() == '' || formData.password.trim() == '' || formData['confirm-pass'].trim() == '') {
        return alert('All fields are required!');
    }

    _authService.register(formData) 
        .then(data => {
            _router.redirect('/dashboard');
        });
}

export default {
    initialize,
    getView,
}