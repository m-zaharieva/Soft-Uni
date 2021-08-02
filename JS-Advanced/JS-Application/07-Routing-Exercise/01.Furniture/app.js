import page from './../node_modules/page/page.mjs';

import renderFuncs from './render/rendering.js';
import dashboard from './pages/dashboard/dashboardPage.js';
import navigation from './nav/navView.js';
import login from './pages/login/loginPage.js';
import register from './pages/register/registerPage.js';
import create from './pages/create/createPage.js';
import auth from './services/auth.js';
import details from './pages/details/detailsPage.js';
import edit from './pages/edit/editPage.js';
import myFurnitures from './pages/my-furniture/myFurniturePage.js';


let navContainer = document.getElementById('navigation');
let contentWrapper = document.getElementById('container-views');
renderFuncs.initialize(contentWrapper, navContainer);

page('/dashboard', renderFuncs.decorateContext, navigation.getView, dashboard.getView);
page('/login', renderFuncs.decorateContext, navigation.getView, login.getView);
page('/register', renderFuncs.decorateContext, navigation.getView, register.getView);
page('/logout', async (context) => { await auth.logout(); context.page.redirect('/login'); });
page('/create', renderFuncs.decorateContext, navigation.getView, create.getView);
page('/details/:id', renderFuncs.decorateContext, navigation.getView, details.getView);
page('/edit/:id', renderFuncs.decorateContext, navigation.getView, edit.getView);
page('/my-furniture', renderFuncs.decorateContext, navigation.getView, myFurnitures.getView);

page('/', '/dashboard');
page('/index.html', '/dashboard');
page('/home', '/dashboard');
page.start();