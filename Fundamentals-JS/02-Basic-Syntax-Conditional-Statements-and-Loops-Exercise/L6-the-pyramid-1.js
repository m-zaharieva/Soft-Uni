function pyramid(base, increment) {    
let stone = 0; 
let marble = 0; 
let lapis = 0; 
let gold = 0; 
let height = 0; 
let layer = 1;
let baseLeftSteps = base

for (let i = 1; i <=base; i+=2){
    let stoneLayerArea = (baseLeftSteps - 2) * (baseLeftSteps - 2)
    let decorationMaterialLayerArea = (baseLeftSteps * 4) - 4;
    
    if (layer % 5 == 0) {
        if (layer === Math.ceil(base / 2)) {
            gold = baseLeftSteps * baseLeftSteps * increment;
            height += 1 * increment;
            break; 
        }
        stone += stoneLayerArea * increment;
        lapis += decorationMaterialLayerArea * increment;
    } else if (layer === Math.ceil(base / 2)) {
        gold = baseLeftSteps * baseLeftSteps * increment;
    } else {
        stone += stoneLayerArea * increment;
        marble +=  decorationMaterialLayerArea * increment;
    }

    layer += 1;
    baseLeftSteps -= 2;
    height += 1 * increment;
}

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}

pyramid(20,1);


//stone, marble, lapis lazuki, gold. 
//every next step is reduced by 2 blocks
//the height of every step equals the given increment
//every fifth's step outer layer is made out of lapis lazuki instead of marble
//requaired stone for one step - redue the W and L by 2 blocks, fint it's area and multiply it by the increment