import { getUserData } from '../../services/authService.js';
import { html, nothing } from './../../../node_modules/lit-html/lit-html.js';



export let catalogTemplate = (teams, members) => html`
<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>

    ${getUserData()
    ? privateButtons()
    : nothing}

    ${teams.map(t => teamTemplate(t, members))}

</section>`;

let teamTemplate = (team, members) => html`
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${members.filter(m => m.teamId == team._id).length} Members</span>
            <div><a href="/catalog/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>
`;

let privateButtons = () => html`
    <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>
`;