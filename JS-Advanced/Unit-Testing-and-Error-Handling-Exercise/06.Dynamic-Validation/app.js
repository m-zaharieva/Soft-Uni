function validate() {
    // select elements
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', validateEmail);

    function validateEmail() {
        let validPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!validPattern.test(emailInput.value)) {
            emailInput.className = 'error';
        } else {
            emailInput.className = '';
        }
    }
}

