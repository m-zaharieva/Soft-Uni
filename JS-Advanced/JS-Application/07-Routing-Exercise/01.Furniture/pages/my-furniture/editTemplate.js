import { html } from './../../node_modules/lit-html/lit-html.js';

export let editTemplate = (details, form) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${form.editFormHandler}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control${form.validFields.make ? ' is-valid' : ' is-invalid'}" id="new-make" type="text" name="make" .value=${details.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control${form.validFields.model ? ' is-valid' : ' is-invalid'}" id="new-model" type="text" name="model" .value=${details.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control${form.validFields.year ? ' is-valid' : ' is-invalid'}" id="new-year" type="number" name="year" .value=${details.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control${form.validFields.description ? ' is-valid' : ' is-invalid'}" id="new-description" type="text" name="description" .value=${details.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control${form.validFields.price ? ' is-valid' : ' is-invalid'}" id="new-price" type="number" name="price" .value=${details.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control${form.validFields.img ? ' is-valid' : ' is-invalid'}" id="new-image" type="text" name="img" .value=${details.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${details.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
`;