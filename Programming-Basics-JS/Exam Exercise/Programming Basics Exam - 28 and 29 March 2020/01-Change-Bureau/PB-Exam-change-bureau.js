function changeBureau (bitCoinsInput, chineseJuanInput, comisionInput) {
    let bitCoins = Number(bitCoinsInput);
    let chineseJuan = Number(chineseJuanInput); 
    let juanToLV = (chineseJuan * 0.15) * 1.76; // LV
    let bitCoinToLv = bitCoins * 1168; // LV
    let sumInLv = juanToLV + bitCoinToLv;
    let euro = sumInLv / 1.95;
    let comision = euro * Number(comisionInput) / 100;
    let result = (euro - comision).toFixed(2);

    console.log(result);

}


changeBureau(20, 5678, 2.4);