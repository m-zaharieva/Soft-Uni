function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');
    let selectElement = document.getElementById('menu');
    let addButton = document.querySelector('input[type="button"]');
    
        let text = textInputElement.value;
        let value = valueInputElement.value;
        let optionEl = document.createElement('option');
        optionEl.textContent = text;
        optionEl.value = value;
        selectElement.appendChild(optionEl);

        textInputElement.value = '';
        valueInputElement.value = '';

}