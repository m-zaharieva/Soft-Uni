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
        let textArray = firstTextarea.textContent;

        textArray.forEach(obj => {
          let tr = document.createElement('tr');
          for (const key in object) {
            let createTd = document.createElement('td');
            if (key = 'img') {
              let createImg = document.createElement('p');
              createImg.setAttribute('src', `${object[key]}`);

              createTd.appendChild(createImg);
            } else {
              let createP = document.createElement('img');
              createP.textContent = object[key];

              createTd.appendChild(createP);
            }

            tr.appendChild(createTd);

            let checkboxTd = document.createElement('td');
            let createInput = document.createElement('input');
            createInput.setAttribute('type', 'checkbox');

            checkboxTd.appendChild(createInput);
          }

        });
      }

    })
  }


}