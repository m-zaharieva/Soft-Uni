let baseUrl = 'http://localhost:3030';
let loginForm = document.querySelector('form');
loginForm.addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(e) {
    e.preventDefault();

    const registerData = new FormData(e.currentTarget);
    let email = registerData.get('email');
    let password = registerData.get('password');

    let response = await fetch(`${baseUrl}/users/login`, {
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