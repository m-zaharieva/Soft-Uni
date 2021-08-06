import { loginTemplate } from "./loginTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _authService = undefined;

function initialize(router, renderer, authService) {
    _router = router;
    _renderer = renderer;
    _authService = authService;
}

function getView(context) {
    let modelView = {
        loginHandler,
    }
    let templateResult = loginTemplate(modelView);
    _renderer(templateResult);
}

function loginHandler(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let username = formData.get('username');
    let password = formData.get('password');

    if (username.trim() == '' || password.trim() == '') {
        alert('All Fields are required!');
        return;
    }

    let user = { username, password };
    _authService.login(user)
        .then(res => res.json())
        .then(data => {
            if (data.hasOwnProperty('code')) {
                alert(data.message);
                return;
            }
            localStorage.setItem('user', JSON.stringify(data));
            _router.redirect('/all-listings');
        })
        .catch(error => {
            alert(error);
        })

}

export default {
    getView,
    initialize
}
