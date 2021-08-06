import { html } from './../../node_modules/lit-html/lit-html.js';

export let allListingsTemplate = (model) => html`
<!-- All Listings Page -->
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
    ${model.cars.length > 0 
    ? model.cars.map(c => cardTemplate(c))
    : html`<p class="no-cars">No cars in database.</p>`}
    </div>
</section>`;

let cardTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
              <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;