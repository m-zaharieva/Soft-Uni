function armies(arr) {
    let armies = new Map();

    arr.forEach(line => {
        if (line.includes('arrives')) {
            let index = line.indexOf('arrives');
            let leader = line.substring(0, index - 1);
            armies.set(leader, {});
        } else if (line.includes('defeated')) {
            let index = line.indexOf('defeated');
            let leader = line.substring(0, index - 1);
            if (armies.has(leader)) {
                armies.delete(leader);
            }
        } else if (line.includes(':')) {
            let [leader, army] = line.split(': ');
            let [armyName, count] = army.split(', ');
            count = Number(count);

            if (armies.has(leader)) {
                armies.get(leader)[armyName] = count;
            }
        } else {
            let [armyName, count] = line.split(' + ');
            count = Number(count)
            Array.from(armies.keys()).forEach(leader => {
                if (armies.get(leader).hasOwnProperty(armyName)) {
                    armies.get(leader)[armyName] += count;
                }
            })
        }
    });

    let leaders = Array.from(armies.keys()).sort((a, b) => {
        let valuesA = Object.values(armies.get(a));
        let valuesB = Object.values(armies.get(b));
        let totalCountA = 0;
        valuesA.forEach(element => {
            element = Number(element);
            totalCountA += element;
        });

        let totalCountB = 0;
        valuesB.forEach(element => {
            element = Number(element);
            totalCountB += element;
        });

        if (totalCountA - totalCountB > 0) {
            return -1;
        } else if (totalCountA - totalCountB < 0) {
            return 1;
        } else {
            return 0;
        }
    })

    leaders.forEach(leader => {
        let total = 0;
        Object.keys(armies.get(leader)).forEach(army => {
            total += armies.get(leader)[army];
        })
        let armiesCountSort = Object.keys(armies.get(leader)).sort((a, b) => {
            let countA = armies.get(leader)[a];
            let countB = armies.get(leader)[b];
            if (countA - countB > 0) {
                return -1;
            } else if (countA - countB < 0) {
                return 1;
            } else {
                return 0;
            }
        })

        console.log(`${leader}: ${total}`);
        armiesCountSort.forEach(line => {
            console.log(`>>> ${line} - ${armies.get(leader)[line]}`);
        });

    })

    // console.log(leaders);
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);