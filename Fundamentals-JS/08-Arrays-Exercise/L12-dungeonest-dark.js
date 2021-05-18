function dungeonestDark(arr) {
    let inicialHealth = 100;
    let coins = 0;
    let bestRoom = 0;

    let arrToString = arr.join('');
    let newArr = arrToString.split("|");

    for (let index = 0; index < newArr.length; index++) {
        let elementArr = newArr[index].split(' ');

        let itemOrMonster = elementArr[0];
        let number = Number(elementArr[1]);
        // potion
        if (itemOrMonster === "potion") {
            bestRoom++;
            if (100 - inicialHealth <= number) {
                number = 100 - inicialHealth;
            }

            inicialHealth += number;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${inicialHealth} hp.`);

        // chest
        } else if (itemOrMonster === 'chest') {
            coins += number;
            bestRoom++;
            console.log(`You found ${number} coins.`);
        
        //monster
        } else {
            inicialHealth -= number;
            bestRoom++;
            if (inicialHealth > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${inicialHealth}`);

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
