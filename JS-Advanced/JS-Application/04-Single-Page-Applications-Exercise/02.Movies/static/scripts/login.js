import changeViews from '../../changeViews.js';
import navigation from './nav.js';

function initialize(domElement) {
    let navigationElement = document.getElementById('navigation');

    let form = domElement.querySelector('form');
    form.addEventListener('submit', loginRequest)

    async function loginRequest(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let body = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        if (body.email.trim() == '' || body.password.trim() == '') {
            return alert('both fields are required!');
        }

        try {
            let response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                let data = await response.json();
                localStorage.setItem('userToken', data.accessToken);
                localStorage.setItem('userEmail', data.email)
                localStorage.setItem('userId', data._id);
                console.log(data);
                document.querySelectorAll('#form-login input').forEach(el => el.value = '');

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

