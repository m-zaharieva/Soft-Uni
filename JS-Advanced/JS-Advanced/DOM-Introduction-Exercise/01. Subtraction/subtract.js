function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');
    let resultContainerElement = document.getElementById('result');
    resultContainerElement.textContent = Number(firstNumberElement.value) - Number(secondNumberElement.value);

}