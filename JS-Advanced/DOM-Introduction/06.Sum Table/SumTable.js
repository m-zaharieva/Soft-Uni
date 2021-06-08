function sumTable() {
    let tableDataCollectionElements = Array.from(document.querySelectorAll("tr td:last-child"));
    let sumBox = document.getElementById('sum');
    let result = tableDataCollectionElements.reduce((acc, el) => {
        let value = Number(el.textContent);
        return acc + value;
    }, 0);

    sumBox.textContent = result;
}