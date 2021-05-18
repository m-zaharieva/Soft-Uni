function birthDayParty (rentInput){
    let rent = Number(rentInput);
    let cake = rent * 20 / 100;
    let drinks = cake - cake * 45 / 100;
    let animator = rent / 3;
    let sum = rent + cake + drinks + animator;

    console.log(sum);
};

birthDayParty("3720");