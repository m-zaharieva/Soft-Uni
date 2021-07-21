import navigation from "../navigation.js";
import viewFinder from "../viewFinder.js";
import { request } from "./jsonRequests.js";

async function register(userInfo) {

    try {
        let registerResult = await request('http://localhost:3030/users/register', 'Post', userInfo);
        localStorage.setItem('authToken', registerResult.accessToken);
        localStorage.setItem('userId', registerResult._id);
        localStorage.setItem('userName', registerResult.email);

        navigation.loginUser();
    } catch (error) {
        alert(error)
    }

}

async function login(userInfo) {

    try {
        let loginResult = await request('http://localhost:3030/users/login', 'Post', userInfo);
        localStorage.setItem('authToken', loginResult.accessToken);
        localStorage.setItem('userId', loginResult._id);
        localStorage.setItem('userName', loginResult.email);

        navigation.loginUser();
    } catch (error) {
        alert(error)
    }

}

async function logout() {
    try {
        let logOutResult = await request('http://localhost:3030/users/logout', 'Get', undefined, true, true);
        clearStorage();
        navigation.logoutUser();

        return viewFinder.redirectTo('login');

    } catch (error) {
        alert(error);
    }
}

function getUserName() {
    return localStorage.getItem('userName');
}

function getUserId() {
    return localStorage.getItem('userId');
}

export function setUserId(userId){
    localStorage.setItem('userId', userId);
}

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function clearStorage() {
    localStorage.clear();
}

function isLogetIn() {
    return localStorage.getItem('authToken') !== undefined &&
        localStorage.getItem('authToken') !== null;
}

let auth = {
    register,
    login,
    logout,
    getUserName,
    getUserId,
    getAuthToken,
    clearStorage,
    isLogetIn,
}
export default auth