function solve() {
    document.querySelector('#container button').addEventListener('click', onClick);

    // 1. Select elements from DOM 
    let convertFromElement = document.getElementById('selectMenuFrom');
    let convertToElement = document.getElementById('selectMenuTo');
    
    // 2. insert the two options in "convert to" select tag
    let val1 = document.createElement('option');
    val1.textContent = 'Binary';
    val1.value = 'binary';

    let val2 = document.createElement('option');
    val2.textContent = 'Hexadecimal';
    val2.value = 'hexadecimal';
    convertToElement.appendChild(val1);
    convertToElement.appendChild(val2);
    
    // 3. Add event listener to the button
    
    // 4. Function onClick
    function onClick() {
        let numberInputElement = document.getElementById('input');
        let resultFieldElement = document.getElementById('result');
        let inputNumber = Number(numberInputElement.value);
        resultFieldElement.value = '';
        
        if (convertToElement.value === 'binary') {
            resultFieldElement.value = inputNumber.toString(2);
        } else if (convertToElement.value === 'hexadecimal') {
            resultFieldElement.value = inputNumber.toString(16).toUpperCase();
        }

    }
}