import { catalogTemplate } from "./catalogTemplate.js";
import * as teamService from './../../services/teamService.js';

let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {
    Promise.all([teamService.getAllMembers(), teamService.getAll()])
        .then(([members, teams]) => {
            let templateResult = catalogTemplate(teams, members);
            _render(templateResult);

        })
}

export default {
    initialize,
    getView,
}