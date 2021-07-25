function isLogedIn() {
    let token = localStorage.getItem('accessToken');
    return token !== undefined ? true : false;
}




let authentication = {
    isLogedIn,
}

export default authentication;