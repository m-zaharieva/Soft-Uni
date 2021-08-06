import { html } from './../../node_modules/lit-html/lit-html.js';

export let detailsTemplate = (model) => html`
<!-- Listing Details Page -->
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${model.car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${model.car.brand}</li>
            <li><span>Model:</span>${model.car.model}</li>
            <li><span>Year:</span>${model.car.year}</li>
            <li><span>Price:</span>${model.car.price}$</li>
        </ul>

        <p class="description-para">${model.car.description}</p>
        ${model.car._ownerId == model.userId 
        ? html`
        <div class="listings-buttons">
            <a href="/edit/${model.car._id}" class="button-list">Edit</a>
            <a href="javascript:void(0)" class="button-list" @click=${model.deleteHandler}>Delete</a>
        </div>`
        : ''
        }
    </div>
</section>`;