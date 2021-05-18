function cardGame(input) {
    let players = {};
    let cardMapper = {
        p: {
            'J': 11,
            'Q': 12, 
            'K': 13, 
            'A': 14
        },
        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
    }
    input.forEach(player => {
        let [name, cards] = player.split(': ');
        cards = cards.split(', ');
        let newHand = new Set(cards);

        if (!players.hasOwnProperty(name)) {
            players[name] = newHand;
        } else {
            newHand.forEach(card => {
                players[name].add(card);
            })
        }

    });

    Object.keys(players).forEach(player => {
        let deckPower = getCardScore(players[player]);
        console.log(`${player}: ${deckPower}`);
    });
    
    function getCardScore(set) {
        let totalPower = 0;

        set.forEach(card => {
            card = card.split('');
            let cardPower = card.slice(0, card.length - 1).join('');
            let cardType = card[card.length - 1];

            if (!isNaN(Number(cardPower))) {
                totalPower += Number(cardPower) * cardMapper['t'][cardType];
            } else {
                totalPower += cardMapper['p'][cardPower] * cardMapper['t'][cardType];
            }
        })

        return totalPower;
    }

    // console.log(players);
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);