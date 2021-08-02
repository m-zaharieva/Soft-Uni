import cookbookAjax from "../services/cookbookAjax.js";

let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView() {
    let form = section.querySelector('form');
    form.addEventListener('submit', createRecipeHandler);
    [...main.children].forEach(x => x.remove());
    main.append(section);
    return section;
}

export default {
    initialize,
    showView,
}


function createRecipeHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);

    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n').map(x => x.trim()).filter(l => l != '');
    let steps = formData.get('steps').split('\n').map(x => x.trim()).filter(l => l != '');

    let body = {
        name,
        img,
        ingredients,
        steps
    }

    cookbookAjax.createRecipe(body);
    form.reset();
}