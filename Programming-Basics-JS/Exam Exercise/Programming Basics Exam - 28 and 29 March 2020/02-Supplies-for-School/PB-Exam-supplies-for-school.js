function supplies(pencilInput, markersInput, deskSupplyInput, discountInput) {
    let pencils = Number(pencilInput) * 5.80;
    let markers = Number(markersInput) * 7.20;
    let deskSupply = Number(deskSupplyInput) * 1.2;
    let sum = pencils + markers + deskSupply;
    let discount = sum * discountInput / 100;
    let result = sum - discount;

    console.log(result.toFixed(3));
}

supplies(2, 3, 2.5, 25);


