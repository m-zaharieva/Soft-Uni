import { e } from "../helpers/domCreator.js";
import { getUserId } from "../services/auth.js";
import { deleteRequest, getDetails } from "../services/cookbookAjax.js";
import del from "./del.js";
import edit from "./edit.js";

let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView(childElement) {
    [...main.children].forEach(x => x.remove());
    main.append(childElement);
}

export function showDetailsHandler(e) {
    let currentArticle = e.currentTarget;
    let id = currentArticle.dataset.id;
    let ownerId = currentArticle.dataset.ownerId;
    let isOwner = ownerId === getUserId();
    console.log(isOwner);
    
    getDetails(id)
        .then(data=> {
            let childElement = recipeDetailsHtml(data, isOwner);
            showView(childElement);
        });
}

export default {
    initialize, 
    showView,
}



// create recipe extended card
export function recipeDetailsHtml(recipe, ownership) {
    let boundEditHandler = editRecipe.bind(null, recipe);
    let boundDeleteHandler = deleteRecipe.bind(null, recipe);
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
            recipe.steps.map(s => e('p', {}, s)), 
            ownership 
            ? e('p', {className: 'buttons'}, 
                e('button', {id: 'Edit', onClick: boundEditHandler}, 'Edit'),
                e('button', {id: 'Delelte', onClick: boundDeleteHandler}, 'Delelte'))
            : '',
        ),
    );

    return result;
}




function editRecipe(recipe, e) {
    let name = recipe.name;
    let img = recipe.img;
    let ingredients = (recipe.ingredients).join('\n');
    let steps = recipe.steps.join('\n');

    let body = {
        name: name,
        img: img,
        ingredients: ingredients,
        steps: steps,
    }

    edit.showView(body, recipe._id, recipe._ownerId);
}



function deleteRecipe(recipe, e) {
    let id = recipe._id;
    deleteRequest(id);  
    del.showView();
}