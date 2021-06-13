// function solve() {
//   let textareasCollection = Array.from(document.querySelectorAll('#exercise textarea'));
//   let [generateArea, buyArea] = [...textareasCollection];

//   let buttonsCollection = Array.from(document.querySelectorAll('#exercise button'));
//   let [generateButton, buyButton] = [...buttonsCollection];

//   generateButton.addEventListener('click', generate);
//   buyButton.addEventListener('click', summerize);


//   // functions
//   function generate() {
//     let textToGenerate = JSON.parse(generateArea.value); // array of objects
//     textToGenerate.forEach(obj => {
//       let currentRow = createRow(obj);
//       let tableBodyElement = document.getElementsByTagName('tbody')[0];
//       tableBodyElement.appendChild(currentRow);
//     });
//   }

//   function createRow(elObj) {
//     // Create row element
//     let createRow = document.createElement('tr');
//     // Create each td with an for in loop
//     for (let key in elObj) {
//       let td = document.createElement('td');
//       if (key == "img") {
//         let newImgEl = document.createElement('img');
//         newImgEl.setAttribute('src', `${elObj[key]}`);
//         td.appendChild(newImgEl);
//       } else {
//         let paragraphElement = document.createElement('p');
//         paragraphElement.textContent = elObj[key];
//         td.appendChild(paragraphElement);
//       }

//       createRow.appendChild(td);
//     }

//     let td = document.createElement('td');
//     let input = document.createElement('input');
//     input.setAttribute('type', 'checkbox');
//     td.appendChild(input);
//     createRow.appendChild(td);

//     return createRow;
//   }

//   function summerize() {

//     let products = [];
//     let totalPrice = 0;
//     let decoration = [];

//     let divWrapper = document.getElementsByClassName('table')[0];
//     let inputs = Array.from(divWrapper.getElementsByTagName('input'));

//     inputs.filter(el => el.checked === true).forEach(checkedBox => {
//       let paragraphs = checkedBox.parentElement.parentElement.querySelectorAll('p');
//       products.push(paragraphs[0].textContent);
//       totalPrice += Number(paragraphs[1].textContent);
//       decoration.push(Number(paragraphs[2].textContent));
//     });

//     let avarageDecoration = (decoration.reduce((acc, x) => acc + x, 0)) / decoration.length;

//     buyArea.value = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avarageDecoration}`;
//   }


// }









function solve() {
  // select elements
  let divWrapper = document.getElementById('exercise');
  let buttonElements = document.querySelectorAll('button');

    for (let index = 0; index < buttonElements.length; index++) {

    // Add event listener to the buttons
    let btn = buttonElements[index];

    btn.addEventListener('click', (e) => {

      // button 'Generate'
      if (btn.textContent === 'Generate') {
        let firstTextarea = btn.previousElementSibling;
        let textArray = JSON.parse(firstTextarea.value);

        textArray.forEach(obj => {
          let tbody = document.getElementsByTagName('tbody')[0];

          // create Table row
          let tr = document.createElement('tr');
          for (const key in obj) {

            // create table data cell
            let createTd = document.createElement('td');
            if (key == 'img') {
              let createImg = document.createElement('img');
              createImg.setAttribute('src', `${obj[key]}`);
              createTd.appendChild(createImg);
            } else {
              let createP = document.createElement('p');
              createP.textContent = obj[key];
              createTd.appendChild(createP);
            }
            tr.appendChild(createTd);
          }

          // create checkbox 
          let checkboxTd = document.createElement('td');
          let createInput = document.createElement('input');
          checkboxTd.appendChild(createInput);
          createInput.setAttribute('type', 'checkbox');
          tr.appendChild(checkboxTd);

          tbody.appendChild(tr);

        });

        let allCheckbox = document.querySelectorAll('tbody input[type="checkbox"]');
        for (const input of allCheckbox) {
          input.disabled = false;
        }

        // button Buy 
      } else if (btn.textContent === 'Buy') {
        let secondTextarea = e.target.previousElementSibling;
        let resultObject = cherckedItems();
        let products = resultObject.products.join(', ');
        let totalPrise = (resultObject.totalPise).toFixed(2);
        let avarageDecFac = resultObject.decFac.reduce((acc, x) => acc + x, 0) / resultObject.decFac.length;
        secondTextarea.value = `Bought furniture: ${products}\nTotal price: ${totalPrise}\nAvarage decoration factor: ${avarageDecFac.toFixed(2)}`
      }
    })
  }

  function cherckedItems() {
    let obj = {
      products: [],
      totalPise: 0,
      decFac: []
    }

    let checkboxInputElements = document.querySelectorAll('tbody input[type="checkbox"]');
    for (const input of checkboxInputElements) {
      if (input.checked === true) {
        let tr = input.parentElement.parentElement;
        let tdElements = tr.querySelectorAll('td');
        obj.products.push(tdElements[1].children[0].textContent);
        obj.totalPise += Number(tdElements[2].children[0].textContent);
        obj.decFac.push(Number(tdElements[3].children[0].textContent));
      }
    }
    return obj;
  }


}