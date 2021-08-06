import { navTemplate } from "./navTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _authService = undefined;

function initialize(router, renderer, authService) {
    _router = router;
    _renderer = renderer;
    _authService = authService;
}

function getView(context, next) {
    let userData = _authService.getUserData();
    let isLogedIn = userData ? true : false;  
    let username = isLogedIn ? JSON.parse(userData).username : '';

    let navModel = {
        logout: logoutHandler, 
        isLogedIn: isLogedIn,
        username: username,
    }
    let templateResult = navTemplate(navModel);
    _renderer(templateResult);
    next();
}

function logoutHandler(e) {
    let userData = JSON.parse(_authService.getUserData());
    console.log('here');
    _authService.logout(userData.accessToken)
        .then(res => {
            if(res.ok) {
                localStorage.clear();
                _router.redirect('/home');
            }
            localStorage.clear();
        })
}

export default {
    getView,
    initialize
}
