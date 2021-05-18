function easterLunch(cakeCountInput, eggsInput, curabieInput) {
    let cake = Number(cakeCountInput);
    let eggs = Number(eggsInput);
    let curabie = Number(curabieInput);
    let cakePrise = cake * 3.20;
    let eggsPrise = eggs * 4.35;
    let curabiePrise = curabie * 5.40;
    let eggsPaintPrise = eggs * 12 * 0.15;

    let result = cakePrise + eggsPrise + curabiePrise + eggsPaintPrise;

    console.log(result.toFixed(2));
}

easterLunch("3", "2", "3");