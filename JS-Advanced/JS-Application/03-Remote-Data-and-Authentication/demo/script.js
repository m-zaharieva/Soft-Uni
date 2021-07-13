let baseUrl = 'http://localhost:3030';
let registerSection = document.getElementById('registration');
let registerForm = document.getElementById('register-form');

let loginSection = document.getElementById('log-in');
let loginForm = document.getElementById('login-form');

let addMovieSection = document.getElementById('add-movie');
let movieFormElement = document.getElementById('add-movie-form');

let showMoviesSection = document.querySelector('.show-movies');
let showAllMoviesList = document.getElementById('movie-list');
let showAllMoviesButton = document.getElementById('show-all-movies');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let loginData = new FormData(loginForm);

    fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: loginData.get('email'),
            password: loginData.get('password')
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            saveToken(data.accessToken)
            loginSection.classList.add('hide');
            registerSection.classList.add('hide');
            addMovieSection.classList.remove('hide');
            showMoviesSection.classList.remove('hide');
        })
        .catch(error => {
            console.error(error);
        })
})

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let registerData = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: registerData.get('email'),
            password: registerData.get('password')
        })
    })
        .then(res => res.json())
        .then(data => {
            saveToken(data.accessToken)
            registerSection.classList.add('hide');
            loginSection.classList.add('hide');
            addMovieSection.classList.remove('hide');
            showMoviesSection.classList.remove('hide');
        })
        .catch(error => {
            console.error(error);
        })
})

movieFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get('title');
    let description = formData.get('descriptopn');
    let token = getToken();

    fetch(`${baseUrl}/data/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            title,
            description
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log('There is a problem with movie creation');
        })

    e.currentTarget.reset();
})

showAllMoviesButton.addEventListener('click', () => {
    fetch(`${baseUrl}/data/movies`)
        .then(res => res.json())
        .then(movies => {
            movies.forEach(movie => {
                let movieHolder = document.createElement('div');
                let movieTitle = document.createElement('header');
                movieTitle.classList.add('movie-header');
                movieTitle.textContent = movie.title;
                let movieDescription = document.createElement('p');
                movieDescription.classList.add('movie-descr');
                movieDescription.textContent = movie.description;

                movieHolder.appendChild(movieTitle);
                movieHolder.appendChild(movieDescription);
                showAllMoviesList.appendChild(movieHolder);
            });

        })
})

function saveToken(token) {
    localStorage.setItem('auth_token', token);
}

function getToken() {
    let token = localStorage.getItem('auth_token');
    return token;
}