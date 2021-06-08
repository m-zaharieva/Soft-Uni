function search() {
   let searchInputElement = document.getElementById('searchText');
   let townsElementsCollection = document.querySelectorAll('#towns li');
   let resultElement = document.getElementById('result');
   let counter  = 0;

   let inputValue = searchInputElement.value;
   for (const element of townsElementsCollection) {
      let content = element.textContent;
      if (content.includes(inputValue)) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         counter++;
      }
   }

   resultElement.textContent = `${counter} matches found`

}
