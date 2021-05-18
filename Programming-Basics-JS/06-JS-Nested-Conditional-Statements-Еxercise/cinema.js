function cinema(typeInput, rowInput, columnInput) {

    let type = typeInput;
    let row = Number(rowInput);
    let column = Number(columnInput);
    let seats = row * column;

    switch (type) {
        case "Premiere":
            console.log(`${(seats * 12.00).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${(seats * 7.50).toFixed(2)} leva`);
            break;
        case "Discount":
            console.log(`${(seats * 5.00).toFixed(2)} leva`);
            break;
    }
}
cinema("Premiere", "10", "12");