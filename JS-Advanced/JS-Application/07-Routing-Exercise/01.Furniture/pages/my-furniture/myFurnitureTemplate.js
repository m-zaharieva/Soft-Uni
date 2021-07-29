import { html } from './../../node_modules/lit-html/lit-html.js';

export let furnitureHtml = (furniture) => html`
<div class="col-md-4" data-id="${furniture._id}" data-owner-id="${furniture._ownerId}">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${furniture.img}" />
            <p>Description here</p>
            <footer>
                <p>Price: <span>${furniture.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>
`;


export let myFurnitureTemplate = (furnitures) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${furnitures.map(f => furnitureHtml(f))}
</div>
`;
