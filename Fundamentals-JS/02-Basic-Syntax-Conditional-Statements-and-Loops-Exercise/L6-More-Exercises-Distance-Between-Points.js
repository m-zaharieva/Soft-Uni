function distance(x1, y1, x2, y2) {
    let distX = Math.abs(x2 - x1); 
    let distY = Math.abs(y1 - y2);
    let dist = Math.sqrt((distX * distX) + (distY * distY));

    console.log(dist);
}

distance(2, 4, 5, 0);