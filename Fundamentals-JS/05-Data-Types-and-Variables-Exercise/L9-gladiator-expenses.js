function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let tempLostGame = 1;
    let expenses = 0; 
    let shieldBreaks = 0;
    while (tempLostGame <= lostFights) {
        if (tempLostGame % 2 === 0) {
            expenses += helmetPrice;
        }

        if (tempLostGame % 3 === 0) {
            expenses += swordPrice;
        }

        if (tempLostGame % 2 === 0 && tempLostGame % 3 === 0) {
            expenses += shieldPrice; 
            shieldBreaks += 1;
            if (shieldBreaks % 2 === 0) {
                expenses += armorPrice;
            }
        }


        tempLostGame++;
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiator(23, 12.50, 21.50, 40, 200);

//Every second lost game, his helmet is broken.

//Every third lost game, his sword is broken.

//When both his sword and helmet are broken in the same lost fight, his shield also brakes.

//Every second time, when his shield brakes, his armour also needs to be repaired. 

//Gladiator expenses: 16.00 aureus
