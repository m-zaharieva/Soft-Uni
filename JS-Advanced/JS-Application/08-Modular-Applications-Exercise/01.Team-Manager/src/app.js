import page from './../node_modules/page/page.mjs';
import { renderer } from './helpers/renderHelper.js';
import catalogPage from './pages/catalog/catalogPage.js';
import createPage from './pages/create/createPage.js';
import detailsPage from './pages/details/detailsPage.js';
import homePage from './pages/home/homePage.js';
import loginPage from './pages/login/loginPage.js';
import nav from './pages/nav/nav.js';
import registerPage from './pages/register/registerPage.js';

let mainElement = document.getElementById('app');
let navElement = document.getElementById('titlebar');

let mainContentRender = renderer(mainElement);
let navContentRender = renderer(navElement);

nav.initialize(page, navContentRender);
homePage.initialize(page, mainContentRender);
loginPage.initialize(page, mainContentRender);
registerPage.initialize(page, mainContentRender);
catalogPage.initialize(page, mainContentRender);
createPage.initialize(page, mainContentRender);
detailsPage.initialize(page, mainContentRender);

page('/', '/home');
page('/index.html', '/home');

page(nav.getView);
page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/catalog', catalogPage.getView);
page('/create', createPage.getView);
page('/catalog/details/:id', detailsPage.getView);
// page('/details/:id/edit')

page.start();
