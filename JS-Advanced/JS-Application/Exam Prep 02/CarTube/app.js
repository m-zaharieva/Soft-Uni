import page from './node_modules/page/page.mjs';
import homePage from './pages/home/homePage.js';
import nav from './pages/nav/nav.js';
import renderHtml from './helpers/renderHtml.js';
import authService from './services/authService.js';
import loginPage from './pages/login/loginPage.js';
import registerPage from './pages/register/registerPage.js';
import allListingsPage from './pages/allListings/allListingsPage.js';
import crudService from './services/crudService.js';
import createPage from './pages/create/createPage.js';
import detailsPage from './pages/details/detailsPage.js';
import editPage from './pages/edit/editPage.js';
import myListingsPage from './pages/myListings/myListingsPage.js';
import searchPage from './pages/search/searchPage.js';

let mainElement = document.getElementById('site-content');
let navElement = document.getElementById('nav');

let navContentRender = renderHtml.initialize(navElement);
let mainContentRender = renderHtml.initialize(mainElement);

nav.initialize(page, navContentRender, authService);
homePage.initialize(page, mainContentRender);
loginPage.initialize(page, mainContentRender, authService);
registerPage.initialize(page, mainContentRender, authService);
allListingsPage.initialize(page, mainContentRender, crudService);
createPage.initialize(page, mainContentRender, crudService, authService);
detailsPage.initialize(page, mainContentRender, crudService, authService);
editPage.initialize(page, mainContentRender, crudService, authService);
myListingsPage.initialize(page, mainContentRender, authService, crudService);
searchPage.initialize(page, mainContentRender);

page(nav.getView);
page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/all-listings', allListingsPage.getView);
page('/create', createPage.getView);
page('/details/:id', detailsPage.getView);
page('/edit/:id', editPage.getView);
page('/my-listings', myListingsPage.getView);
page('/search', searchPage.getView);


page('/', '/home');
page('/index.html', '/home');

page.start();
