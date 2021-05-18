function bookShelf(arr) {
    let shelfs = {};
    let library = {};

    arr.forEach(line => {
        if (line.includes(' -> ')) {
            let [id, ganere] = line.split(' -> ');
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = ganere;
                library[ganere] = {};
            }
        } else if (line.includes(', ')) {
            let [book, ganere] = line.split(', ');
            let [name, author] = book.split(': ');
            if (Object.keys(library).includes(ganere)) {
                library[ganere][name] = author;
            }
        }
    });

    let sortedGanres = Object.keys(library).sort((a, b) => {
        let booksA = Object.keys(library[a]);
        let booksB = Object.keys(library[b]);
        if (booksA.length - booksB.length > 0) {
            return -1;
        } else if (booksA.length - booksB.length < 0) {
            return 1;
        } else {
            return 0;
        }
    });

    sortedGanres.forEach(ganere => {
       let sortedBooks = Object.keys(library[ganere]).sort((a,b) => a.localeCompare(b));
       let booksOnTheShelf = sortedBooks.length;
       let kvp = Object.entries(shelfs);
       kvp.forEach(array => {
            if (array[1] === ganere) {
               console.log(`${array[0]} ${ganere}: ${booksOnTheShelf}`);
            }
       });
       
       sortedBooks.forEach(book => {
        console.log(`--> ${book}: ${library[ganere][book]}`);
       });
    });

    // console.log(Object.entries(shelfs));
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);

// let shelfs = {shelfId: ganre};
// let library = {ganre: {book: author, book: author}};