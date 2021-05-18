function arenaTier(input) {
    let tier = {}; 

    let index = 0; 
    let command = input[index];
    while(command !== 'Ave Cesar') {
        input.forEach(line => {

            if (line.split(' -> ').length === 3) {
                let [name, technique, skill] = line.split(' -> ');

                if (!tier.hasOwnProperty(name)) {
                    tier[name] = {[technique]: skill};

                } else {

                    if (!Object.keys(tier[name]).includes(technique)) {
                        tier[name][technique] = skill;

                    } else {

                        if (tier[name[technique]] < skill) {
                            tier[name[technique]] = skill;
                        }
                    }
                }

            } else if (line.split(' vs ').length === 2) {
                let [gladiatorA, gladiatorB] = line.split(' vs ');

                if (tier.hasOwnProperty(gladiatorA) && tier.hasOwnProperty(gladiatorB)) {
                    let techniquesA = Object.keys(tier[gladiatorA]); // [Heal, Support, Shield]
                    let techniquesB = Object.keys(tier[gladiatorB]); // [Shield]
                    let compareArr = techniquesA.filter(elementA => {
                        if (techniquesB.includes(elementA)) {
                            return true;
                        }
                    });

                    compareArr.forEach(element => {
                        if (tier[gladiatorA][element] > tier[gladiatorB][element]) {
                            delete tier[gladiatorB];
                        } else {
                            delete tier[gladiatorA];
                        }
                    });

                }

            }
        });
        index++; 
        command = input[index];
    }

    let sortedTier = {};
    Object.keys(tier).forEach(gladiator => {
        let totalSkill = 0; 
        Object.keys(tier[gladiator]).forEach(technique => {
            totalSkill += Number(tier[gladiator][technique]);
        });
        sortedTier[gladiator] = {totalSkill: totalSkill};

        Object.keys(tier[gladiator]).forEach(technique => {
            sortedTier[gladiator][technique] = tier[gladiator][technique];
        });
    });

    let sortedTotalSkill = Object.keys(sortedTier).sort((a,b) => {
        
        if (sortedTier[b]['totalSkill'] - sortedTier[a]['totalSkill'] > 0) {
            return 1;
        } else if ((sortedTier[a]['totalSkill'] - sortedTier[b]['totalSkill']) > 0) {
            return -1;
        } else {
           return a.localeCompare(b);
        }
    })

    sortedTotalSkill.forEach(name => {
        let sortedKeys = Object.keys(tier[name]).sort((a,b) => {
            if (Number(tier[name][a]) - Number(tier[name][b]) > 0) {
                return -1;
            } else if (Number(tier[name][a]) - Number(tier[name][b]) < 0) {
                return 1;
            } else {
                return a.localeCompare(b);
            }
        }) 

        console.log(`${name}: ${sortedTier[name]['totalSkill']} skill`);
        sortedKeys.forEach(element => {
            console.log(`- ${element} <!> ${tier[name][element]}`);
        });

    });

    // console.log(sortedTotalSkill);
}

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ]);

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);