import renderHtml, { renderPage } from './helpers/renderHtml.js';
import page from './node_modules/page/page.mjs';
import { getUserData } from './services/authService.js';
import allMemesView from './views/allMemes/allMemesView.js';
import createView from './views/createMeme/createView.js';
import editMemeView from './views/editMeme/editMemeView.js';
import homeView from './views/home/homeView.js';
import loginView from './views/login/loginView.js';
import memeDetailsView from './views/memeDetails/memeDetailsView.js';
import navigationView from './views/navigation/navigationView.js';
import profileView from './views/profile/profileView.js';
import registerView from './views/register/registerView.js';

const mainElement = document.getElementById('app');
const navElement = document.getElementById('nav');
const notificationtWrapper = document.getElementById('notifications');
renderHtml.initialize(mainElement, navElement, notificationtWrapper);

// try Victor's way to use initialize to clearly know all dependancies of a page view and use less imports in the modules;
homeView.initialize(page, renderPage);


page(navigationView.getView);
page('/home', homeView.getView);
page('/login', loginView.getView);
page('/register', registerView.getView);
page('/my-profile', profileView.getView);

page('/all-memes', allMemesView.getView);
page('/details/:id', memeDetailsView.getView);
page('/create-meme', createView.getView);
page('/edit-meme/:id', editMemeView.getView);

page('/', `${getUserData() !== null ? '/all-memes' : '/home'}`);
page('/index.html', `${getUserData() !== null ? '/all-memes' : '/home'}`);
page.start();


