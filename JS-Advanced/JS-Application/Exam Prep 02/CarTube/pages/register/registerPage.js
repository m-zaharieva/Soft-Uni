import { registerTemplate } from "./registerTemplate.js";

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
        submitHandler,
    }
    let templateResult = registerTemplate(modelView);
    _renderer(templateResult);
}

function submitHandler(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let username = formData.get('username');
    let password = formData.get('password');
    let repeatPass = formData.get('repeatPass');

    if (username.trim() == '' || password.trim() == '' || repeatPass.trim() == '') {
        alert('All Fields are required!');
        return;
    }

    let user = { username, password };

    _authService.register(user)
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
