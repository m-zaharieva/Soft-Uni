function validate() {
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    let companyCheckboxInput = document.getElementById('company');
    let companyFieldset = document.getElementById('companyInfo');
    let companyNumberInput = document.getElementById('companyNumber');
    let submitButton = document.getElementById('submit');
    let isValidDiv = document.getElementById('valid');

    // validation regex patterns
    let validUsername = /^[a-zA-Z0-9]{3,20}$/;
    let validEmail = /^.+@.+\..+$/;
    let validPassword = /^[\w]{3,15}$/;

    // attach event listener
    companyCheckboxInput.addEventListener('change', isCompany);
    submitButton.addEventListener('click', validateInputs);

    function isCompany() {
        if (companyCheckboxInput.checked) {
            companyFieldset.style.display = 'block';
        } else {
            companyFieldset.style.display = 'none';
        }
    }

    function validateInputs(e) {
        e.preventDefault();

        let isValidUsername = validUsername.test(usernameInput.value);
        borderHandler(usernameInput, isValidUsername);

        let isValidEmail = validEmail.test(emailInput.value);
        borderHandler(emailInput, isValidEmail);

        let isValidPassword =
            (passwordInput.value === confirmPasswordInput.value) &&
            validPassword.test(passwordInput.value);
        borderHandler(passwordInput, isValidPassword);
        borderHandler(confirmPasswordInput, isValidPassword);

        let companyValue = companyNumberInput.value;
        let isChecked = companyCheckboxInput.checked;
        let isNumber = companyValue.trim() !== '' && !isNaN(Number(companyValue));
        let isInRange = companyValue >= 1000 && companyValue <= 9999;
        let isValidCompanyNumber = isChecked && isNumber && isInRange;
        borderHandler(companyNumberInput, isValidCompanyNumber)

        let mainInfoIsValid = isValidUsername && isValidEmail && isValidPassword;
        let companyInfoIsValid = !companyCheckboxInput.checked || (companyCheckboxInput.checked && isValidCompanyNumber);
        if (mainInfoIsValid && companyInfoIsValid) {
            isValidDiv.style.display = 'block';
        } else {
            isValidDiv.style.display = 'none';
        }
    }

    function borderHandler(input, isValid) {
        if (isValid) {
            input.style.setProperty('border', 'none');
        } else {
            input.style.setProperty('border', '2px solid red');
        }
    }
}
