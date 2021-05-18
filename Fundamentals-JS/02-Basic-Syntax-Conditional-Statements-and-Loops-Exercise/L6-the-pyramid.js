function pyramid(base, increment) {    
    let stone = 0; 
    let marble = 0; 
    let lapisLazuki = 0; 
    let gold = 0; 
    let layer = 0;
    let height = 0;
    
    for (let i = base; i >= 1; i-=2) {
        layer ++;
        if (layer % 5 === 0) {
            lapisLazuki += (i * 4 - 4) * increment;
            stone += (i - 2) * (i - 2) * increment;
        } else if (layer === Math.ceil(base/2)) {
            gold += i * i * increment;
        }  else {
            marble += (i * 4 - 4) * increment;
            stone += (i - 2) * (i - 2) * increment;
        }
    }

    height = layer * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuki)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);


}

pyramid(23,0.5);


//stone, marble, lapis lazuki, gold. 
//every next step is reduced by 2 blocks
//the height of every step equals the given increment
//every fifth's step outer layer is made out of lapis lazuki instead of marble
//requaired stone for one step - redue the W and L by 2 blocks, fint it's area and multiply it by the increment