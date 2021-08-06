// import { renderPage } from '../../helpers/renderHtml.js';
import { homeTemplate } from './homeTemplate.js';


// Initialize every page view dependancies before routing
let _router = undefined;
let _renderer = undefined;

function initialize(router, renderer) {
    _router = router;
    _renderer = renderer;
}

async function getView(context) {
    console.log(context);
    let templateResult = await homeTemplate();

    // Implement the Victor's way to first initialize every page view 
    _renderer(templateResult);

    // renderPage(templateResult);
}

export default {
    getView,
    initialize
}