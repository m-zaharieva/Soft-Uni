import { e } from "../helpers/domCreator.js";
import cookbookAjax from "../services/cookbookAjax.js";
import details, { showDetailsHandler } from "./details.js";

let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView() {
    [...main.children].forEach(x => x.remove());
    [...section.children].forEach(x => x.remove());
    cookbookAjax.getRecipes()
        .then(data => {
        data.forEach(el => {
            console.log(el);
            let element = createRecipePreview(el);
            element.dataset.id = el._id;
            element.dataset.ownerId = el._ownerId;
            section.append(element);
        });
    });
    main.append(section);
}

// create recipe small preview card
export function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: showDetailsHandler},
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}


export default {
    initialize,
    showView,
}
