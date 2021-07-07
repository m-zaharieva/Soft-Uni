function solve() {
    // 1. Select elements
    let inputTextElement = document.getElementById('input');
    let divContainerElement = document.getElementById('output');

    // 2. extract text from text area
    let textFromTextarea = inputTextElement.value;
    
    // 3. Transform the text form the text area
    let textArray = textFromTextarea.split('.').filter(x => x !== '');

    // 4. place the text into the div.   
    if (textArray.length <= 3 ) {
      divContainerElement.innerHTML = `<p>${textArray.join('. ')}.</p>`;
    } else {
      let arrLength = textArray.length;
      while(arrLength > 0) {
        let result = [];
        for (let i = 0; i < 3; i++) {
          let element = textArray.shift();
          if(element != undefined) {
            result.push(`${element}.`)
          }
       }
       divContainerElement.innerHTML += `<p>${result.join(' ')}</p>`
        arrLength = textArray.length;
      }
    }
}