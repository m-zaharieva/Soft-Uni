import {html} from './node_modules/lit-html/lit-html.js'
import {ifDefined} from "./node_modules/lit-html/directives/if-defined.js"
export const searchTemplate = (towns) => html`
<ul>
${towns.map(town=>html`
<li class="${ifDefined(town.class)}">${town.name}</li>
`)}

</ul>

`