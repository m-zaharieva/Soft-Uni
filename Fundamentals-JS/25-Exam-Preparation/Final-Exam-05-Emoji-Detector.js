function solve(input) {
    let text = input.shift();
    let emojiPattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let numberPattern = /[\d]/g;
    let threshold = 1; 
    let emojiesCount = 0; 
    let coolEmojies = [];
    let numbers = text.match(numberPattern);
    
    for (const num of numbers) {
        threshold *= num; 
    }

    let emojies = text.match(emojiPattern);
    emojiesCount = emojies.length;

    emojies.forEach(emoji => {
       emoji = emoji.trim();
       let emojiName = emoji.substring(2, emoji.length - 2);
       
       let coolness = 0;

       for (const letter of emojiName) {
            let asciiCode = letter.charCodeAt(0);
            coolness += asciiCode;
       }

       if (coolness >= threshold) {
           coolEmojies.push(emoji);
       }

    });

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiesCount} emojis found in the text. The cool ones are:`);
    if (coolEmojies.length > 0) {
        console.log(coolEmojies.join('\n'));
    }
}

solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ]);