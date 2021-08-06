import page from './node_modules/page/page.mjs';

import homePage from './pages/home/homePage.js';
import navigation from './pages/navigation/navigation.js';
import renderService from './services/renderService.js';

const mainWrapper = document.getElementById('app');
const navWrapper = document.getElementById('nav');
renderService.initialize(mainWrapper, navWrapper);


page('/home', navigation.getView(), homePage.getView());
page.start();
