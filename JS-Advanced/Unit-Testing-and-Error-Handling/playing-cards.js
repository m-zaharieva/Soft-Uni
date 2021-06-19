function createCard(facesInput, suitInput) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!validFaces.includes(facesInput)) {
        throw new Error('Invalid face');
    } else if (!validSuits.hasOwnProperty(suitInput)) {
        throw new Error('Invalid suit');
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


createCard('A', 'C');

