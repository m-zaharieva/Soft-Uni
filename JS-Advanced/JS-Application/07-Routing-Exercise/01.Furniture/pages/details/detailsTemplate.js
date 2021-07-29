import auth from '../../services/auth.js';
import { html } from './../../node_modules/lit-html/lit-html.js';

export let detailsTemplate = (details, deleteHandler) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${details.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${details.make}</span></p>
        <p>Model: <span>${details.model}</span></p>
        <p>Year: <span>${details.year}</span></p>
        <p>Description: <span>${details.description}</span></p>
        <p>Price: <span>${details.price}</span></p>
        <p>Material: <span>${details.material}</span></p>
        ${auth.getUserId() == details._ownerId 
        ? html`
        <div>
            <a href="/edit/${details._id}" class="btn btn-info">Edit</a>
            <a href="javascript:void(0);" @click=${deleteHandler} class="btn btn-red">Delete</a>
        </div>` 
        : ''}
    </div>
</div>
`;