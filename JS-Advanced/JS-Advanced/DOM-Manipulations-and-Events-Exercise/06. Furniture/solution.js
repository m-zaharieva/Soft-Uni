function solve() {
  let textareasCollection = Array.from(document.querySelectorAll('#exercise textarea'));
  let [generateArea, buyArea] = [...textareasCollection];

  let buttonsCollection = Array.from(document.querySelectorAll('#exercise button'));
  let [generateButton, buyButton] = [...buttonsCollection];

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', summerize);


  // functions
  function generate() {
    let textToGenerate = JSON.parse(generateArea.value); // array of objects
    textToGenerate.forEach(obj => {
      let currentRow = createRow(obj);
      let tableBodyElement = document.getElementsByTagName('tbody')[0];
      tableBodyElement.appendChild(currentRow);
    });
  }

  function createRow(elObj) {
    // Create row element
    let createRow = document.createElement('tr');

    // create img td
    let tdImg = document.createElement('td');
    let newImg = document.createElement('img');
    newImg.setAttribute('src', `${elObj.img}`);
    tdImg.appendChild(newImg);
    createRow.appendChild(tdImg);

    // create paragraph elements 
    for (let key in elObj) {
      let tdP = document.createElement('td');
      if (key !== "img") {
        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = elObj[key];
        tdP.appendChild(paragraphElement);
        createRow.appendChild(tdP);
      }
    }

    let tdInput = document.createElement('td');
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    tdInput.appendChild(input);
    createRow.appendChild(tdInput);

    return createRow;
  }

  function summerize() {

    let products = [];
    let totalPrice = 0;
    let decoration = [];

    let divWrapper = document.getElementsByClassName('table')[0];
    let inputs = Array.from(divWrapper.getElementsByTagName('input'));

    inputs.filter(el => el.checked === true).forEach(checkedBox => {
      let paragraphs = checkedBox.parentElement.parentElement.querySelectorAll('p');
      products.push(paragraphs[0].textContent);
      totalPrice += Number(paragraphs[1].textContent);
      decoration.push(Number(paragraphs[2].textContent));
    });

    let avarageDecoration = (decoration.reduce((acc, x) => acc + x, 0)) / decoration.length;

    buyArea.value = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avarageDecoration}`;
  }


}
