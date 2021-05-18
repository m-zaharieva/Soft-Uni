function oldBooks(input) {

    let favouriteBook = input.shift();
    let checkedBooks = 0;

    let index = 0; 
    let book = input[index];
    while (book !== "No More Books") { 
        
        if (book !== favouriteBook) {
            checkedBooks++;
            index++;
        } else if (book === favouriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }
    book = input[index];
    }

    if (book === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    } 
}

//oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
//oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);