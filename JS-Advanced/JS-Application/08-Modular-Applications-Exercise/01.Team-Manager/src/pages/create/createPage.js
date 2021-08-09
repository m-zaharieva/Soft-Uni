import { createTemplate } from "./createTemplate.js";
import * as teamService from './../../services/teamService.js';


let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {
    let templateResult = createTemplate(submitHandler);
    _render(templateResult);
}

function submitHandler(e) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.currentTarget));
    teamService.createTeam(formData)
        .then(teamData => {
            return teamService.addMember({teamId: teamData._id});
        })
        .then(memderData => {
            memderData.status = 'member';
            return teamService.approveMember(memderData);
        })
        .then(data => {
            _router.redirect('/catalog');
        });
        
}

export default {
    initialize,
    getView,
}