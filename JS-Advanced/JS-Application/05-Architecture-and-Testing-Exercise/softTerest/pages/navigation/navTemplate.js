import { isSignedIn } from '../../services/authService.js';
import { html } from './../../node_modules/lit-html/lit-html.js';

export let navTemplate = () => html`
    <nav id="navigation" class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container">
            <a class="navbar-brand" href="/home">
                <img src="./images/idea.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link link" href="/dashboard">Dashboard</a>
                    </li>
                    ${isSignedIn()
                    ? html`
                    <li class="nav-item user">
                        <a class="nav-link link" href="/create">Create</a>
                    </li>
                    <li class="nav-item user">
                        <a class="nav-link link" href="javascript:void(0)">Logout</a>
                    </li>`
                    : html`
                    <li class="nav-item guest">
                        <a class="nav-link link" href="/login">Login</a>
                    </li>
                    <li class="nav-item guest">
                        <a class="nav-link link" href="/register">Register</a>
                    </li>`
                }              
                </ul>
            </div>
        </div>
    </nav>`;