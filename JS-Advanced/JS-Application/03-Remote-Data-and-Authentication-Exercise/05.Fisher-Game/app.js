// URLs
let loginUrl = 'http://localhost:3030/users/login';
let registerUrl = 'http://localhost:3030/users/register';
let logoutUrl = 'http://localhost:3030/users/logout';
let catchesUrl = 'http://localhost:3030/data/catches';


// header buttons
let logedUserButtons = document.getElementById('user');
let homeButton = document.getElementById('home');
homeButton.addEventListener('click', loadHomeScreen);

let logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', logOutHandler);

let guestUserButtnos = document.getElementById('guest');
let loginButton = document.getElementById('login-anchor');
loginButton.addEventListener('click', loadLoginScreen);

let registerButton = document.getElementById('register-anchor');
registerButton.addEventListener('click', loadRegistrationScreen);

let welcomeName = document.querySelector('.email span');

// forms
let resistrationFormSection = document.getElementById('register-view');
let registrationForm = document.getElementById('register');
registrationForm.addEventListener('submit', registrationHandler);

let loginFormSection = document.getElementById('login-view');
let loginForm = document.getElementById('login');
loginForm.addEventListener('submit', loginUserHandler);

let homeScreenData = document.getElementById('home-view');
let addForm = document.getElementById('addForm');

// home screen functions handling
let loadButton = document.getElementById('loadButton');
loadButton.addEventListener('click', loadAllCatches);

let catchesFieldset = document.getElementById('main');
let catchesDivElement = document.getElementById('catches');



// checks if there is an active session and displays the required screen data
let token = localStorage.userToken;
if (token === undefined) {
    loadLoginScreen();
    welcomeName.textContent = 'guest';
} else {
    loadHomeScreen()
}



// Event handling functions
async function loginUserHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    try {
        let response = await fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        let loginData = await response.json();
        console.log(loginData);
        let token = loginData.accessToken;

        if (response.status === 200) {
            localStorage.setItem('userToken', token);
            localStorage.setItem('email', email);
            localStorage.setItem('id', loginData._id);

            e.target.querySelector('input[name="email"]').value = '';
            e.target.querySelector('input[name="password"]').value = '';

            loadHomeScreen()
        }

    } catch (error) {
        return alert(error);
    }
    welcomeName.textContent = localStorage.email;
}

async function registrationHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');
    let errorMessageField = registrationForm.querySelector('p.notification');
    if (email.trim() == '' || password.trim() == '' || rePass.trim() == '') {
        errorMessageField.textContent = 'All fields are required!';
        return;
    } else if (password !== rePass) {
        errorMessageField.textContent = 'Passwords don\'t match!';
        return;
    }

    try {
        let response = await fetch(registerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        let registrationData = await response.json();
        console.log(registrationData);
        let token = registrationData.accessToken;
        localStorage.setItem('userToken', token);
        localStorage.setItem('email', email);
        localStorage.setItem('id', registrationData._id);

        e.target.querySelector('input[name="email"]').value = '';
        e.target.querySelector('input[name="password"]').value = '';
        e.target.querySelector('input[name="rePass"]').value = '';

        loadHomeScreen()

    } catch (error) {
        return alert(error);
    }
}

async function logOutHandler(e) {
    let token = localStorage.userToken;
    let response = await fetch(logoutUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${token}`
        }
    })
    localStorage.clear();
    loadLoginScreen()
}


// CRUD operations
async function loadAllCatches() {
    catchesDivElement.querySelectorAll('div').forEach(div => div.remove());

    let response = await fetch(catchesUrl);
    let data = await response.json();
    console.log(data);
    data.forEach(el => {
        let isOwner = el._ownerId === localStorage.id;
        let currentCatch = createACatch(el, isOwner);
        currentCatch.dataset.entryId = el._id;
        catchesDivElement.appendChild(currentCatch);
        catchesFieldset.style.display = 'inline-block';
    });
}

async function addCatchHandler(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let angler = form.get('angler');
    let weight = form.get('weight');
    let species = form.get('species');
    let location = form.get('location');
    let bait = form.get('bait');
    let captireTime = form.get('captureTime');
    let newCatch = {
        angler,
        weight,
        species,
        location,
        bait,
        captireTime
    }

    try {
        let response = await fetch(catchesUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Authorization': localStorage.userToken },
            body: JSON.stringify(newCatch)
        })
        let data = await response.json();

        if (response.status == 200) {
            let currentCatch = createACatch(newCatch, true);
            currentCatch.dataset.entryId = data._id;
            catchesDivElement.appendChild(currentCatch);
        }

    } catch(error) {

    }

}

async function editCatch(e) {
    let button = e.target;
    let parentDiv = button.closest('.catch');

    let angler = parentDiv.querySelector('.angler').value;
    let weight = parentDiv.querySelector('.weight').value;
    let species = parentDiv.querySelector('.species').value;
    let location = parentDiv.querySelector('.location').value;
    let bait = parentDiv.querySelector('.bait').value;
    let captureTime = parentDiv.querySelector('.captureTime').value;
    let id = parentDiv.dataset.entryId;

    let currentCatch = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }

    try {
        let response = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.userToken
            },
            body: JSON.stringify(currentCatch)
        });

        console.log(response);

    }
    catch (error) {

    }
}

async function deleteCatch(e) {
    let parentDiv = e.target.closest('.catch');
    let id = parentDiv.dataset.entryId;
    try {
        let response = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplication/json',
                'X-Authorization': localStorage.userToken
            }
        })
        if (response.status === 200) {
            parentDiv.remove();
        }
    } 
    catch(error) {

    }
}



// load screen functions
function loadLoginScreen() {
    guestUserButtnos.style.display = 'inline-block';
    logedUserButtons.style.display = 'none';
    homeButton.className = '';
    loginButton.classList.add('active');
    loginFormSection.style.display = 'block';
    resistrationFormSection.style.display = 'none';
    registerButton.classList.remove('active');
    homeScreenData.style.display = 'none';
    // homeButton.style.display = 'none';
    welcomeName.textContent = 'guest';

}

function loadHomeScreen() {
    let token = localStorage.userToken;
    loginFormSection.style.display = 'none';
    resistrationFormSection.style.display = 'none';
    homeButton.classList.add('active');
    homeScreenData.style.display = 'block';
    catchesFieldset.style.display = 'none';

    let addButton = document.querySelector('#addForm .add');
    if (token === undefined) {
        guestUserButtnos.style.display = 'inline-block';
        loginButton.classList.remove('active');
        addButton.disabled = true;
        welcomeName.textContent = 'guest';

    } else {
        guestUserButtnos.style.display = 'none';
        logedUserButtons.style.display = 'inline-block';
        addButton.disabled = false;
        welcomeName.textContent = localStorage.email;

        addForm.addEventListener('submit', addCatchHandler);
    }
}

function loadRegistrationScreen() {
    loginFormSection.style.display = 'none';
    homeScreenData.style.display = 'none';
    logedUserButtons.style.display = 'none';
    // homeButton.style.display = 'none';

    resistrationFormSection.style.display = 'block';
    guestUserButtnos.style.display = 'inline-block';
    registerButton.classList.add('active');
    loginButton.className = '';
}

function createACatch(obj, isOwner) {
    let catchDiv = document.createElement('div');
    catchDiv.classList.add('catch');

    let anglerLabel = document.createElement('label');
    anglerLabel.textContent = 'Angler';
    let anglerInput = document.createElement('input');
    anglerInput.value = obj.angler;
    anglerInput.type = 'text';
    anglerInput.disabled = true;
    anglerInput.classList.add('angler');

    let hrOne = document.createElement('hr');

    let weightLabel = document.createElement('label');
    weightLabel.textContent = 'Weight';
    let weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.value = obj.weight;
    weightInput.disabled = true;
    weightInput.classList.add('weight');

    let hrTwo = document.createElement('hr');

    let speciesLabel = document.createElement('label');
    speciesLabel.textContent = 'Species';
    let speciesInput = document.createElement('input');
    speciesInput.type = 'text';
    speciesInput.value = obj.species;
    speciesInput.disabled = true;
    speciesInput.classList.add('species');

    let hrThree = document.createElement('hr');

    let locationLabel = document.createElement('label');
    locationLabel.textContent = 'Location'
    let locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.value = obj.location;
    locationInput.disabled = true;
    locationInput.classList.add('location');

    let hrFour = document.createElement('hr');

    let baitLabel = document.createElement('label');
    baitLabel.textContent = 'Bait';
    let baitInput = document.createElement('input');
    baitInput.type = 'text';
    baitInput.value = obj.bait;
    baitInput.disabled = true;
    baitInput.classList.add('bait');

    let hrFive = document.createElement('hr');

    let captureLabel = document.createElement('label');
    captureLabel.textContent = 'Capture Time';
    let captureInput = document.createElement('input');
    captureInput.type = 'number';
    captureInput.value = obj.captureTime;
    captureInput.disabled = true;
    captureInput.classList.add('captureTime');

    let hrSix = document.createElement('hr');

    let updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.disabled = true;
    updateButton.classList.add('update');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.disabled = true;
    deleteButton.classList.add('delete');

    if (isOwner) {
        updateButton.disabled = false;
        updateButton.addEventListener('click', editCatch);
        deleteButton.disabled = false;
        deleteButton.addEventListener('click', deleteCatch);

        anglerInput.disabled = false;
        weightInput.disabled = false;
        speciesInput.disabled = false;
        locationInput.disabled = false;
        baitInput.disabled = false;
        captureInput.disabled = false;
    }

    catchDiv.appendChild(anglerLabel);
    catchDiv.appendChild(anglerInput);
    catchDiv.appendChild(hrOne);
    catchDiv.appendChild(weightLabel);
    catchDiv.appendChild(weightInput);
    catchDiv.appendChild(hrTwo);
    catchDiv.appendChild(speciesLabel);
    catchDiv.appendChild(speciesInput);
    catchDiv.appendChild(hrThree);
    catchDiv.appendChild(locationLabel);
    catchDiv.appendChild(locationInput);
    catchDiv.appendChild(hrFour);
    catchDiv.appendChild(baitLabel);
    catchDiv.appendChild(baitInput);
    catchDiv.appendChild(hrFive);
    catchDiv.appendChild(captureLabel);
    catchDiv.appendChild(captureInput);
    catchDiv.appendChild(hrSix);
    catchDiv.appendChild(updateButton);
    catchDiv.appendChild(deleteButton);

    return catchDiv;
}