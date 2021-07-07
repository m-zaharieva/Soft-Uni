function validate() {

    let validationPattern = /([a-z]+@[a-z]+\.[a-z]{2,})/g;

    // select elements 
    let inputElement = document.getElementById('email');
    
    inputElement.addEventListener('change', (e) => {
        if (!validationPattern.test(inputElement.value)) {
            inputElement.className = 'error';
        } else {
            inputElement.className = '';
        }
    });
}