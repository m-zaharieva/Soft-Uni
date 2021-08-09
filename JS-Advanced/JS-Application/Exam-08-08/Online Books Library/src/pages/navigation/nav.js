import { navTemplate } from "./navTemplate.js";


let _router = undefined;
let _render = undefined;
let _authService = undefined;

function initialize(router, render, authService) {
    _router = router;
    _render = render;
    _authService = authService;
}

function getView(ctx, nxt) {
    let userData = _authService.getUserData();
    let templateResult = navTemplate(userData, logoutHandler);
    _render(templateResult);
    nxt();
}

function logoutHandler(e) {
    _authService.logout()
        .then(() => {
            _router.redirect('/dashboard');
        });
}

export default {
    initialize,
    getView,
}