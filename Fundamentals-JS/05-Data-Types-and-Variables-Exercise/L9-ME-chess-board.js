function chessBoard(n) {
    let size = Number(n);
    let currentColor = 'black';
    let previousColor = '';

    console.log('<div class="chessboard">');

    for (let row = 1; row <= n; row++) {
        console.log('<div>');

        for (let column = 1; column <= n; column++) {
            console.log(`<span class="${currentColor}"></span>`);
            previousColor = currentColor;

            if (previousColor === 'black') {
                currentColor = 'white';
            } else {
                currentColor = 'black';
            }
        }
        console.log('</div>');

        if (size % 2 === 0) {
            currentColor = previousColor;

        }

    }

    console.log('</div>');
}

chessBoard(4);

//Write a function to print a chessboard of size n X n. See the example for more information.
//The input comes as a single number argument n.
//The output should be returned as a result of your function in the form of a string.

//<div class="chessboard">
//    <div>
//        <span class="black"></span>
//        <span class="white"></span>
//        <span class="black"></span>
//    </div>
//    <div>
//        <span class="white"></span>
//        <span class="black"></span>
//        <span class="white"></span>
//    </div>
//    <div>
//        <span class="black"></span>
//        <span class="white"></span>
//        <span class="black"></span>
//    </div>
//</div>
