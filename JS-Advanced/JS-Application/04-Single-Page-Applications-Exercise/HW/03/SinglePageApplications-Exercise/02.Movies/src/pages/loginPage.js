import viewChanger from "../viewChanger.js";
import nav from "./nav.js";

let section = undefined;

function set(domElement) {
    section = domElement;
    let form = section.querySelector('form');
    form.addEventListener('submit', logUser);
}

async function logUser(e) {
    e.preventDefault();

    let form = e.target;
    let data = new FormData(form);

    let email = data.get('email');
    let password = data.get('password');

    let user = {
        email,
        password
    }
    try {
        let loginRequest = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })

        if (!loginRequest.ok) {
            let loginResult = await loginRequest.json();
            throw new Error(loginResult.message);
        }
        let loginResult = await loginRequest.json();
        localStorage.setItem('user-id', loginResult._id);
        localStorage.setItem('accessToken', loginResult.accessToken);
        localStorage.setItem('email', loginResult.email);

        document.querySelector('#container ul li a').textContent = `Welcome, ${loginResult.email}`;
        nav.updateNav();
        form.reset();
        viewChanger.navigateTo('home');
    } catch (err) {
        alert(err.message);
    }
}

async function getView() {
    return section;
}

let loginPage = {
    set,
    getView
}

export default loginPage;