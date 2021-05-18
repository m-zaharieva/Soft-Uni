function cake(input) {

    let cakeWidth = Number(input.shift());
    let cakeLength = Number(input.shift());
    let cakePieces = cakeWidth * cakeLength;
    let piecesLeft = cakePieces;
    let piecesTaken = 0;

    let index = 0;
    let pieces = input[index];

    while (pieces !== "STOP") {
        pieces = Number(input[index]);
        piecesLeft -= pieces;
        piecesTaken += pieces;

        if (piecesLeft > 0) {
            index++;
        } else {
            console.log(`No more cake left! You need ${piecesTaken - cakePieces} pieces more.`);
            break;
        }
        pieces = input[index];
    }

    if (pieces === "STOP") {
        console.log(`${cakePieces - piecesTaken} pieces are left.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
//cake(["10", "2", "2", "4", "6", "STOP"]);