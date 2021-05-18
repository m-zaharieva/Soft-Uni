function gladiatorInventory(input) {
    let inventory = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let changeInventory = input[i].split(' ');
        let command = changeInventory[0];
        let equipment = changeInventory[1];

        switch (command) {
            case 'Buy':
                let isIncluded = false;
                for (let element of inventory) {
                    if (element === equipment) {
                        isIncluded = true;
                        break;
                    }
                }
                if (!isIncluded) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                let isTrushIncluded = false;
                let indexOfElement = 0;
                for (let index in inventory) {
                    let element = inventory[index];
                    if (element === equipment) {
                        isTrushIncluded = true;
                        indexOfElement = index;
                        break;
                    }
                }
                if (isTrushIncluded) {
                    inventory.splice(indexOfElement, 1);
                }
                break;
            case 'Repair':
                let isPresend = false;
                for (let element of inventory) {
                    if (element === equipment) {
                        isPresend = true;
                        let indexOfRepairedEl = inventory.indexOf(element);
                        let repairedElement = inventory.splice(indexOfRepairedEl, 1);
                        inventory.push(repairedElement.join(''));
                        break;
                    }
                }
                break;
            case 'Upgrade':
                let upgradeSet = equipment.split('-');
                let equipmentToUpgrade = upgradeSet[0];
                let upgrade = upgradeSet[1];

                let isTrue = false;
                let indexOfEl = 0;
                for (let index in inventory) {
                    let element = inventory[index];
                    if (element === equipmentToUpgrade) {
                        isTrue = true;
                        indexOfEl = Number(index);
                        break;
                    }
                }
                if (isTrue) {
                    inventory.splice((indexOfEl + 1), 0, `${equipmentToUpgrade}:${upgrade}`)
                    break;
                }

                break;
        }
    }
    console.log(inventory.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);