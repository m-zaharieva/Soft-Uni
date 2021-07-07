function colorize() {
    let rowElementsCollection = document.querySelectorAll('table tr:nth-child(2n)');
    for (const element of rowElementsCollection) {
        element.style.backgroundColor = ('Teal');
    }    
}