function printDeckOfCards(cards) {
    let isInvalid = false;
    function createCard(facesInput, suitInput) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!validFaces.includes(facesInput) || !validSuits.hasOwnProperty(suitInput)) {
            console.log(`Invalid card: ${facesInput + suitInput}`);
            isInvalid = true;
            return;
        } else {
            class Card {
                constructor(face, suit) {
                    this.face = face;
                    this.suit = validSuits[suit];
                }
                toString = () => {
                    return `${this.face}${this.suit}`
                }
            }
            let newCard = new Card(facesInput, suitInput);
            return newCard.toString();
        }
    }

    let result = [];
    for (const card of cards) {
        if (isInvalid) {
            return;
        }
        let suit = card[card.length - 1];
        let face = card.slice(0, card.length - 1)

        let currentCard = createCard(face, suit);
        result.push(currentCard);
    };
    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10L', 'KH', '2C']);