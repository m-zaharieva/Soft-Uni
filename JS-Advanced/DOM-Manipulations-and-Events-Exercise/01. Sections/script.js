function create(words) {
   // select elements
   let sectionsWrapperElement = document.getElementById('content');

   // create HTML elements
   words.forEach(string => {
      let newDivElement = document.createElement('div');
      let newParagraph = document.createElement('p');
      newParagraph.textContent = string;
      newParagraph.style.display = "none";
      newDivElement.appendChild(newParagraph);
      sectionsWrapperElement.appendChild(newDivElement);
   });
   
   sectionsWrapperElement.addEventListener('click', (e) => {
      e.target.querySelector('p').style.display = '';
   })
   
}