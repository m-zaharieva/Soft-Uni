function deleteByEmail() {
    // 1. Select elements from DOM
    let inputFieldElement = document.querySelector('input');
    let inputText = inputFieldElement.value;
    let deleteButton = document.querySelector('button');
    let resultElement = document.getElementById('result');
    let emailTableElements = document.querySelectorAll('tbody tr td:last-child');
    let isDeleted = false;

    for (const liElement of emailTableElements) {
        if (liElement.textContent == inputText) {
            liElement.parentNode.remove();
            isDeleted = true;
        }
    }

    if (isDeleted) {
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }


    // #. Clear input value 
    inputFieldElement.value = '';
}