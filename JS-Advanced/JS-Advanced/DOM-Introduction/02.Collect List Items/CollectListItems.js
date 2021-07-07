function extractText() {
    let getLiElements = document.querySelectorAll("#items li");
    let arrayFromNodeCollection = Array.from(getLiElements).map(x => x= x.textContent);
    let appendContainer = document.getElementById('result');
    appendContainer.textContent = arrayFromNodeCollection.join('\n').trim();
    
}