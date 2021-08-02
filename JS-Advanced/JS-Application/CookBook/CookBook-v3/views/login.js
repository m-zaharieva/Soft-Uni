import auth from "../services/auth.js";
import catalog from "./catalog.js";
import navigation from "./navigation.js";

let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView() {
    let form = section.querySelector('form');
    form.addEventListener('submit', loginHandler);

    [...main.children].forEach(x => x.remove());
    main.append(section)
}

export default {
    initialize,
    showView,
}


function loginHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    let user = { email, password };

    console.log(auth.loginRequest(user));
    auth.loginRequest(user)
        .then(res => res.json())
        .then(data => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data._id);
        catalog.showView();  
        navigation.showView();
    })


    form.reset();


}