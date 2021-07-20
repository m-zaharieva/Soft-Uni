import changeViews from '../../changeViews.js';
import navigation from './nav.js';

function initialize(domElement) {
    let navigationElement = document.getElementById('navigation');

    let form = domElement.querySelector('form');
    form.addEventListener('submit', registerRequest)

    console.log('this is registration');
    async function registerRequest(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let body = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        if (body.email.trim() == '' ||
            body.password.trim() == '' ||
            formData.get('repeatPassword').trim() == '') {
            return alert('All fields are required!');
        } else if (body.password.length < 6) {
            return alert('Your password must by 6 characters or more!');
        } else if (body.password !== formData.get('repeatPassword')) {
            return alert('Both password must be equal!');
        }

        try {
            let response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                let data = await response.json();
                localStorage.setItem('userToken', data.accessToken);
                localStorage.setItem('userEmail', data.email)
                console.log(data);
                document.querySelectorAll('#form-sign-up input').forEach(el => el.value = '');

                changeViews.showHomePage();
                navigation.initialize(navigationElement);
            }
        } catch (error) {
            return alert(error)
        }

    }
}

export default {
    initialize
};
