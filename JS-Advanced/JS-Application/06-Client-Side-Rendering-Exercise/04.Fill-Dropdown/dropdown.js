import { html, render } from "../node_modules/lit-html/lit-html.js";
import requests from "./httpRequests.js";
import templates from "./templates.js";

let form = document.querySelector('form');
form.addEventListener('submit', addItem)
let selectElement = document.querySelector('#menu');
let result = [];

async function loadOptions() {
    let options = await requests.getAllOptions();
    Object.values(options).forEach(el => {
        let option = templates.optionTemplate(el);
        result.push(option)
    })
    render(result, selectElement);
}
loadOptions()

async function addItem(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let name = formData.get('text');
    let data = await requests.addNewOption(name);
    let newOption = templates.optionTemplate(data);
    result.push(newOption);

    let input = e.target.querySelector('#itemText');
    input.value = '';

    render(result, selectElement);
}