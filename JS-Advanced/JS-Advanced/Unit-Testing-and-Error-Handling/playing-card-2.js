function solve(faceInput, suitInput) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(faceInput)
        || !validSuits.includes(suitInput)) {
        throw new Error('Error');
    } else {

        class Card {
            constructor(face, suit) {
                this.face = face;
                this.suit = suit;
            }

            toString = () => {
                switch (this.suit) {
                    case 'S': this.suit = '\u2660'; break;
                    case 'H': this.suit = '\u2665'; break;
                    case 'D': this.suit = '\u2666'; break;
                    case 'C': this.suit = '\u2663'; break;
                }
                return `${this.face}${this.suit}`;
            }
        }
        return (new Card(faceInput, suitInput)).toString();
    }
}

console.log(solve('A', 'C'));