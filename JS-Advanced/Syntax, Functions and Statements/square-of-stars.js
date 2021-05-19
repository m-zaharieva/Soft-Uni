function squareOfStars(count=5) {
    let star = '*';
    for (let i = 1; i <= count; i++) {
        console.log(`${star} `.repeat(count));
    }
}

squareOfStars();