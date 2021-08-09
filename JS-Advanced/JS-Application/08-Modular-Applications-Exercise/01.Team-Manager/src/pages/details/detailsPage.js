import { detailsTemplate } from "./detailsTemplate.js";
import * as teamService from './../../services/teamService.js';

let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {
    let id = ctx.params.id;
    Promise.all([teamService.getOne(id), teamService.getTeamMembers(id)])
        .then(([team, members]) => {
            console.log(members);
            let templateResult = detailsTemplate(team, members);
            _render(templateResult);
        })


}

export default {
    initialize,
    getView,
}