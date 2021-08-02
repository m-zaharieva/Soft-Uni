
export function isSignedIn() {
    return Boolean(localStorage.getItem('user'));
}