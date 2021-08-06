import { html } from './../../node_modules/lit-html/lit-html.js';

export let editTemplate = (model) => html`
<!-- Edit Listing Page -->
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit=${(e) => model.submitHandler(model.car._id, e)}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${model.car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${model.car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${model.car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${model.car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${model.car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${model.car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;