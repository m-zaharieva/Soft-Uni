import nav from "./nav.js";
import viewChanger from "../viewChanger.js";

let logoutButton = undefined;


async function set(domElement){
    logoutButton =domElement;
    logoutButton.addEventListener('click', logoutUser)
}
async function logoutUser(e){
    e.preventDefault();
    let logoutRequest = await fetch('http://localhost:3030/users/logout',{
        headers:{'X-Authorization': localStorage.getItem('accessToken')}
    })
    localStorage.clear();
    nav.updateNav();
    viewChanger.navigateTo('home');
}

export default{
    set
}

