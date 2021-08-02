let baseUrl = 'http://localhost:3030';
let registerForm = document.querySelector('form');
registerForm.addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(e) {
    e.preventDefault();

    const registerData = new FormData(e.currentTarget);
    let email = registerData.get('email');
    let password = registerData.get('password');
    let repeatedPassword = registerData.get('rePass');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    } else if (password !== repeatedPassword) {
        return alert('Passwords don\'t match!')
    }

    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headres: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok == false) {
        const errorResponse = response.json();
        const error = await errorResponse;
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userToken', data.accessToken);
    
    window.location.pathname = 'index.html';
}