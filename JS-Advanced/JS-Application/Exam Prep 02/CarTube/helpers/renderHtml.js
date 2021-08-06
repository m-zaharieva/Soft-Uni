import {render} from './../node_modules/lit-html/lit-html.js';

function initialize(domWrapper) {
    return function(view) {
        render(view, domWrapper)
    }
}

export default {
    initialize,
}