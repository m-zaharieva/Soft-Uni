function solve() {
    let nameFormInput = document.querySelector('#container input[placeholder=Name]');
    let hallFormInput = document.querySelector('#container input[placeholder=Hall]');
    let priceFormInput = document.querySelector('#container input[placeholder="Ticket Price"]');
    let onScreenButton = document.querySelector('#add-new button');
    let moviesOnScreenUl = document.querySelector('#movies ul');
    let archiveUl = document.querySelector('#archive ul');
    onScreenButton.addEventListener('click', onScreenHandler);

    function onScreenHandler(e) {
        e.preventDefault();
        let nameValue = nameFormInput.value;
        let hallValue = hallFormInput.value;
        let priceValue = priceFormInput.value;

        if (nameValue.trim() !== '' &&
            hallValue.trim() !== '' &&
            priceValue.trim() !== '' &&
            !isNaN(Number(priceValue))) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = nameValue;
            let strongHall = document.createElement('strong');
            strongHall.textContent = `Hall: ${hallValue}`;
            let div = document.createElement('div');
            let strongPrice = document.createElement('strong');
            strongPrice.textContent = Number(priceValue).toFixed(2);
            let input = document.createElement('input');
            input.setAttribute('placeholder', 'Tickets Sold');
            let buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';
            buttonArchive.addEventListener('click', archive);

            li.appendChild(span);
            li.appendChild(strongHall);
            div.appendChild(strongPrice);
            div.appendChild(input);
            div.appendChild(buttonArchive);
            li.appendChild(div);
            moviesOnScreenUl.appendChild(li);

            nameFormInput.value = '';
            hallFormInput.value = '';
            priceFormInput.value = '';
        }
    }

    function archive(e) {
        let input = e.target.parentElement.querySelector('input');
        let inputValue = input.value;
        if (inputValue.trim() !== '' && !isNaN(Number(inputValue))) {
            let parentLi = e.target.parentElement.parentElement;
            let oneTiccketPrice = Number(parentLi.querySelector('div strong').textContent);
            parentLi.querySelector('div').remove();
            let totalAmountElement = parentLi.querySelector('strong');
            totalAmountElement.textContent = `Total amount: ${(Number(inputValue) * oneTiccketPrice).toFixed(2)}`;
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            parentLi.appendChild(buttonDelete);
            archiveUl.appendChild(parentLi);
            buttonDelete.addEventListener('click', deleteLine);
        }
    }

    function deleteLine(e) {
        let currentLine = e.target.parentElement;
        currentLine.remove();
    }

    let clearButton = document.querySelector('#archive > button');
        clearButton.addEventListener('click', clear);

    function clear(e) {
        let lis = document.querySelectorAll('#archive ul li');
        for (const el of lis) {
            el.remove();
        }
    }

    // function clear(e) {
    //     let clearUl = document.querySelector('#archive ul');
    //     clearUl.remove();
    // }
}