import { render } from "./../../node_modules/lit-html/lit-html.js";

export function renderer(domElement) {
    return function (templateResult) {
        render(templateResult, domElement);
    }
}