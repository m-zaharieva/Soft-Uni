function tseamAccount(myArray) {
    let peterAccount = myArray[0].split(' ');
    let index = 1; 
    let commands = myArray[index];
    
    while (commands !== 'Play!') {  
        commands = myArray[index].split(' ');
        let action = commands[0];
        let gameName = commands[1];
        let expansion = gameName.split('-');
        let itExist = false; 

        switch (action) {
            case 'Install': 
                for (let i = 0; i < peterAccount.length; i++) {
                    if (peterAccount[i] === gameName) {
                        itExist = true; 
                        return;
                    } 
                }
                if (!itExist) {
                    peterAccount.push(gameName);
                }
            break;
            case 'Uninstall': 
                for (let i = 0; i < peterAccount.length; i++) {
                    if (peterAccount[i] === gameName) {
                        itExist = true; 
                    }
                }
                if (itExist) {
                    let tempIndex = peterAccount.indexOf(gameName);
                    peterAccount.splice(tempIndex, 1);
                }
            break; 
            case 'Update':
                for (let i = 0; i < peterAccount.length; i++) {
                    if (peterAccount[i] === gameName) {
                        itExist = true; 
                    }
                }
                if (itExist) {
                    let tempIndex = peterAccount.indexOf(gameName);
                    peterAccount.splice(tempIndex, 1);
                    peterAccount.push(gameName);
                }
            break;
            case 'Expansion': 
                for (let i = 0; i < peterAccount.length; i++) {
                    if (peterAccount[i] === expansion[0]) {
                        itExist = true; 
                    }
                }
                if (itExist) {
                    let tempIndex = peterAccount.indexOf(expansion[0]);
                    peterAccount.splice(tempIndex + 1, 0, `${expansion[0]}:${expansion[1]}`);
                }
            break;
            
        }
        index++; 
        commands = myArray[index];
    }

    console.log(peterAccount.join(' '));
}

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);