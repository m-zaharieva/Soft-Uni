import page from './../node_modules/page/page.mjs';
import { renderer } from './helpers/renderHelper.js';
import createPage from './pages/create/createPage.js';
import dashboardPage from './pages/dashboard/dashboardPage.js';
import detailsPage from './pages/details/detailsPage.js';
import editPage from './pages/edit/editPage.js';
import loginPage from './pages/login/loginPage.js';
import nav from './pages/navigation/nav.js';
import profilePage from './pages/profile/profilePage.js';
import registerPage from './pages/register/registerPage.js';
import * as authService from './services/authService.js';
import * as bookService from './services/bookService.js';
import * as likesService from './services/likesService.js';

// main dom wrapper elements
let mainElement = document.getElementById('site-content');
let navElement = document.getElementById('site-header');

// partial render function
let mainContentRender = renderer(mainElement);
let navContentRender = renderer(navElement);

// initialization of dom elements 
nav.initialize(page, navContentRender, authService);
registerPage.initialize(page, mainContentRender, authService);
loginPage.initialize(page, mainContentRender, authService);
dashboardPage.initialize(page, mainContentRender);
detailsPage.initialize(page, mainContentRender, authService, bookService, likesService);
createPage.initialize(page, mainContentRender, bookService);
editPage.initialize(page, mainContentRender, bookService);
profilePage.initialize(page, mainContentRender, authService, bookService);

// router
page('/', '/dashboard');
page('/index.html', '/dashboard');
page('/home', '/dashboard');

page(nav.getView);
page('/dashboard', dashboardPage.getView);
page('/register', registerPage.getView);
page('/login', loginPage.getView);
page('/books/create', createPage.getView);
page('/details/:id', detailsPage.getView);
page('/books/edit/:id', editPage.getView);
page('/profile', profilePage.getView);

page.start();