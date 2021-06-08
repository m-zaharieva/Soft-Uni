function extract(content) {
    let targetParagraphElement = document.getElementById(`${content}`);
    let textToExtractFrom = targetParagraphElement.textContent;
    let pattern = /(\([A-Za-z\s]+\))/g;
    let arrayFromMatches = textToExtractFrom.match(pattern);
    
    return arrayFromMatches.join('; ')
}