function fromJsonToHtml(string) {
    let newArr = JSON.parse(string);
    let outputArr = ["<table>"];
    let mainRow = Object.keys(newArr[0]);
    outputArr.push(makeKeyRow(mainRow));
    
    for (let i = 0; i < newArr.length; i++) {
        let values = Object.values(newArr[i]);
        let valuesRow = makeValueRows(values);
        outputArr.push(valuesRow);
    }

    outputArr.push("</table>");
    
    

    function makeKeyRow (arr) {
        let tableMainRow = ["<tr>"];

        for (let i = 0; i < arr.length; i++) {
            let currentCell = `<th>${arr[i]}</th>`;
            tableMainRow.push(currentCell);
        }

        tableMainRow.push("</tr>");

        return tableMainRow;
    }

    function makeValueRows (arr) {
        let tableVAlueCells = ["<tr>"];

        for (let i = 0; i < arr.length; i++) {
            let currentCell = `<td>${arr[i]}</td>`;
            tableVAlueCells.push(currentCell);
        }

        tableVAlueCells.push("</tr>");

        return tableVAlueCells;
    }

    outputArr.forEach(line => {
        if (typeof line === 'string') {
            console.log(line);
        } else {
            console.log(`\t${line.join('')}`);
        }
    });

    // return outputArr;
}   


fromJsonToHtml('[{"Name":"Pesho", "Score":4, "Grade":8}, {"Name":"Gosho", "Score":5, "Grade":8}, {"Name":"Angel", "Score":5.50, "Grade":10}]');

// fromJsonToHtml('[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]')