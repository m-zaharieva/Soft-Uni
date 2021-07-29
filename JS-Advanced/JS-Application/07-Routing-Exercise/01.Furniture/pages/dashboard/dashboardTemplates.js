import { html } from "./../../node_modules/lit-html/lit-html.js";

export let titlesHtml = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
`;

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

export let allFurnituresHtml = (furnitures) => html`
<div class="row space-top">
    ${furnitures.map(f => furnitureHtml(f))}
</div>
`;

export let dashboardHtml = (furnitures) => html`
${titlesHtml()}
${allFurnituresHtml(furnitures)}
`;
