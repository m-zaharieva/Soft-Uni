import changeViews from "../../changeViews.js";
import navigation from './nav.js';

let navigationElement = document.getElementById('navigation');

async function logOut() {
    let response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('userToken'),
        }
    });
    localStorage.clear();
    changeViews.showLoginPage(); 

    navigation.initialize(navigationElement);
}

export default logOut;