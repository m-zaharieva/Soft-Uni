import { html, render } from "../node_modules/lit-html/lit-html.js";
import requests from "./httpRequests.js";

let optionTemplate = (option) => {
    return html `
    <option value="${option._id}">${option.text}</option>
    `
}

let templates = {
    optionTemplate,
}

export default templates;