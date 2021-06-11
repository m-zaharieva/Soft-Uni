function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let inputText = inputTextElement.value;
    let listElement = document.getElementById('items');

    let newListItemElement = document.createElement('li');
    newListItemElement.textContent = inputText;
    listElement.appendChild(newListItemElement);
    


    inputTextElement.value = '';
}