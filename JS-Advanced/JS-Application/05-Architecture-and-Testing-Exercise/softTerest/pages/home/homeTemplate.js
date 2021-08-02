import { html } from './../../node_modules/lit-html/lit-html.js';

export let homeTemplate = () => html`
<div id="home-view" class="container home wrapper  my-md-5 pl-md-5">
    <div class="d-md-flex flex-md-equal ">
        <div class="col-md-5">
            <img class="responsive" src="./images/01.svg" />
        </div>
        <div class="home-text col-md-7">
            <h2 class="featurette-heading">Do you wonder if your idea is good?</h2>
            <p class="lead">Join our family =)</p>
            <p class="lead">Post your ideas!</p>
            <p class="lead">Find what other people think!</p>
            <p class="lead">Comment on other people's ideas.</p>
        </div>
    </div>
    <div class="bottom text-center">
        <a id="getStarted" class="btn btn-secondary btn-lg " href="javascript:void(0)">Get Started</a>
    </div>
</div>`;