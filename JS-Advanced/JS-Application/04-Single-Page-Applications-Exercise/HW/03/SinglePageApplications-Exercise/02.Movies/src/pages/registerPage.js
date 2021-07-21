
import nav from "./nav.js";
import viewChanger from "../viewChanger.js";

let section = undefined;
function set(domElement) {
    section = domElement;
    let form = section.querySelector('form');
    form.addEventListener('submit', registerUser);
}

async function registerUser(e) {
    e.preventDefault();

    let form = e.target;
    let data = new FormData(form);

    let email = data.get('email');
    let password = data.get('password');
    let repeatPassword = data.get('repeatPassword');

    if (email === '') {
        alert('Email input must be filled');
        return;
    }
    if (password.length < 6) {
        alert('The password should be at least 6 characters long');
        return;
    }
    if (password !== repeatPassword) {
        alert('The repeat password should be equal to the password');
        return;
    }

    let newUser = {
        email,
        password
    }
    try {
        let registerRequest = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })

        if (!registerRequest.ok) {
            let registerResult = await registerRequest.json();
            throw new Error(registerResult.message);
        }
        let registerResult = await registerRequest.json();
        localStorage.setItem('user-id', registerResult._id);
        localStorage.setItem('accessToken', registerResult.accessToken);
        localStorage.setItem('email', registerResult.email);

        document.querySelector('#container ul li a').textContent = `Welcome, ${registerResult.email}`;
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

let registerPage = {
    set,
    getView
}

export default registerPage;