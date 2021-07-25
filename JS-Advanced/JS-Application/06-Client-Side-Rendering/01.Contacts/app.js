import { html, render } from "./node_modules/lit-html/lit-html.js";
import {contacts} from './contacts.js';
import contact from "./templates/contact.js";

let container = document.querySelector(`#contacts`);

const result = contacts.map(contact.contactTemplate);

render(result, container)