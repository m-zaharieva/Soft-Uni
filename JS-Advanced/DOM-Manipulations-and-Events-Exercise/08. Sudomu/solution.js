function solve() {
    // select elements
    let buttonElements = Array.from(document.querySelectorAll('tfoot button'));
    let [checkBtn, clearBtn] = [...buttonElements];
    let tableElement = document.getElementsByTagName('table')[0];
    let checkMessageElement = document.getElementById('check');

    checkBtn.addEventListener('click', quickCheck);
    clearBtn.addEventListener('click', clear);

    function quickCheck() {
        let tableRowElements = Array.from(document.querySelectorAll('tbody tr'));
        let matrix = createMatrix(tableRowElements);

        if (checkMatrixValidation(matrix)) {
            tableElement.style.border = '2px solid green';
            let message = checkMessageElement.getElementsByTagName('p')[0];
            message.style.color = 'green';
            message.textContent = 'You solve it! Congratulations!';
        } else {
            tableElement.style.border = '2px solid red';
            let message = checkMessageElement.getElementsByTagName('p')[0];
            message.style.color = 'red';
            message.textContent = 'NOP! You are not done yet...';
        }

    }

    function clear() {
        tableElement.style.border = 'none';
        let message = checkMessageElement.getElementsByTagName('p')[0];
        message.textContent = '';

        let allInputs = tableElement.getElementsByTagName('input');

        for (const input of allInputs) {
            input.value = '';
        }
    }

    function createMatrix(array) {
        let matrix = [];
        array.forEach(row => {
            let elements = row.getElementsByTagName('input');
            let currentRow = [];
            for (let input of elements) {
                currentRow.push(Number(input.value));
            }

            matrix.push(currentRow);
        });

        return matrix;
    }

    function checkMatrixValidation(matrix) {
        let isValid = true;

        for (let row = 0; row < matrix.length - 1; row++) {
            let rowOne = matrix[row];
            let rowTwo = matrix[row + 1];

            if (rowOne.reduce((acc, x) => acc + x, 0) !== rowTwo.reduce((acc, x) => acc + x, 0)) {
                isValid = false;
            }

            let colOne = [];
            let colTwo = [];

            for (let col = 0; col < matrix[row].length; col++) {
                let elementOne = matrix[col][row];
                colOne.push(elementOne);
                let elementTwo = matrix[col][row + 1];
                colTwo.push(elementTwo);
            }

            if (colOne.reduce((a, x) => a + x, 0) !== colTwo.reduce((a, x) => a + x, 0)) {
                isValid = false;
            }

            let filtered = colOne.filter((x, i, arr) => arr[i] !== arr[i + 1]);
            if (filtered.length !== colOne.length) {
                isValid = false;
            }
        }

        return isValid;
    }
}
