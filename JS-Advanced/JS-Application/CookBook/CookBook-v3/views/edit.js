import cookbookAjax, { getDetails, updateRecipe } from "../services/cookbookAjax.js";
import details, { recipeDetailsHtml } from "./details.js";

let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView(body, id, ownerId) {
    let boundEditHandler = editRecipeHandler.bind(null, id, ownerId);
    let form = section.querySelector('form');
    form.addEventListener('submit', boundEditHandler);
    let nameInput = form.querySelector('input[name="name"]');
    nameInput.value = body.name;
    let imgInput = form.querySelector('input[name="img"]');
    imgInput.value = body.img;
    let ingredientsInput = form.querySelector('textarea[name="ingredients"]');
    ingredientsInput.value = body.ingredients;
    let stepsInput = form.querySelector('textarea[name="steps"]');
    stepsInput.value = body.steps;


    [...main.children].forEach(x => x.remove());
    main.append(section);
    return section;
}

export default {
    initialize,
    showView,
}


function editRecipeHandler(id, ownerId, e) {
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

    updateRecipe(body, id).then(data => {
        let childElement = recipeDetailsHtml(data, true);
        details.showView(childElement);
    });

}