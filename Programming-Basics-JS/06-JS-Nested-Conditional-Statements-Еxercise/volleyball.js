function volleyball (yearType, p, h) {
    let hollidays = Number(p);
    let homeTown = Number(h);
    let weekendsInSofia = 48 - homeTown; 

    let gamesDuringHollidays = hollidays * 2.0 / 3;
    let gamesInSofia = weekendsInSofia * 3.0 / 4;
    let gamesInHomeTown = homeTown;

    let gamesTotal = gamesDuringHollidays + gamesInSofia + gamesInHomeTown;

    if (yearType === "normal") {
        console.log(`${Math.floor(gamesTotal)}`)
    } else {
        gamesTotal = gamesTotal * 1.15;
        console.log(`${Math.floor(gamesTotal)}`)
    }

}

volleyball("leap", "0", "1");