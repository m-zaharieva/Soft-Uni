// load all recipes 
async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
    const recipes = await response.json();

    return Object.values(recipes);
}

// get ingredients for the current reciepe
async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

// create recipe small preview card
function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

// create recipe extended card
function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    return result;
}

// function that executes when all page resourses are load
window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));

    const guestHeader = document.getElementById('guest');
    const logedUsersHeader = document.getElementById('user');
    showHeaderButtons(guestHeader, logedUsersHeader);

});

// create DOM elements 
function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;

}

function showHeaderButtons(guestHeader, logedUsersHeader) {
    const token = sessionStorage.getItem('userToken');
    if (token !== null) {
        logedUsersHeader.style.display = 'inline-block';
        guestHeader.style.display = 'none';
        document.getElementById('logoutBtn').addEventListener('click', logout);
    } else {
        guestHeader.style.display = 'inline-block';
        logedUsersHeader.style.display = 'none';
    }
}

async function logout(e) {
    const token = sessionStorage.getItem('userToken');
    const response = await fetch(`http://localhost:3030/users/logout`, {
        method: 'GET',
        headers: { 'X-Authorization': token }
    });

    if (response.ok == false) {
        const errorResponse = response.json();
        const error = await errorResponse;
        return alert(error.message);
    }

    sessionStorage.removeItem('userToken');
    window.location.pathname = 'index.html';
}