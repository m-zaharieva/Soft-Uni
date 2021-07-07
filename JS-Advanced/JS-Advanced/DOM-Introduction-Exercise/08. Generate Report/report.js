function generateReport() {
    // 1. Get elements
    let thElements = Array.from(document.querySelectorAll('table thead tr th')); //
    let trInTbodyElements = Array.from(document.querySelectorAll('tbody tr')); //

    // 2. Creating an empty array to collect the results
    let result = [];

    // 3. Check for checked input boxes and colleting data
    trInTbodyElements.forEach(tr => {
        let rowObj = {};
        let currentRowElements = Array.from(tr.querySelectorAll('td'));
        // let pattern = /([A-Z]+\s*[a-z]+)/g;
        currentRowElements.forEach((td, index) => {
            let columnThText = thElements[index].textContent.toLowerCase().trim();
            let tdText = td.textContent;
            if (thElements[index].children[0].checked) {
                if (isNaN(tdText)) {
                    rowObj[columnThText] = tdText;
                } else {
                    rowObj[columnThText] = Number(tdText);
                }
            }
        });

        result.push(rowObj);
    });

    // 4. Parse data to JSON format
    let resultToJSON = JSON.stringify(result);

    // 4. Place data into DOM
    let textAreaElement = document.getElementById('output'); //
    textAreaElement.value = resultToJSON;
}


// function generateReport() {
//     // 1. Get elements
//     let thElements = document.querySelectorAll('th'); 
//     let trInTbodyElements = document.querySelectorAll('tbody tr');
//     let outputElement = document.getElementById('output');

//     // 2. Creating an empty array to collect the results
//     let infoThElements = [];
//     let result = [];

//     // 3. Check for checked input boxes and colleting data
//     Array.from(thElements).forEach(th => {
//         if (th.children[0].checked) {
//             infoThElements.push(th.textContent.toLowerCase().trim());
//         } else {
//             infoThElements.push(false);
//         }
//     });

//     Array.from(trInTbodyElements).forEach(trEl => {
//         let rowObj = {};
//         Array.from(trEl.children).forEach((el, i) => {
//             if (infoThElements[i]) {
//                 let currCell = infoThElements[i];
//                 rowObj[currCell] = el.textContent;
//             }
//         });

//         result.push(rowObj);
//     })

//     // 4. Place data into DOM
//     outputElement.textContent = JSON.stringify(result);
// }