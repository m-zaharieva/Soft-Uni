function yard(input){
    let area = Number(input);
    let prise = 7.61 * area;
    let discount = 0.18 * prise;
    let final = prise - discount;
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yard(500);
