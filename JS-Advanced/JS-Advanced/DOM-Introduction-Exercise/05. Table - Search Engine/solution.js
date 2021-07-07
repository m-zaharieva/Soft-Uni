function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      // 1. Select elements
      let tableRowsElement = Array.from(document.querySelectorAll('tbody tr'));
      let searchTextElement = document.getElementById('searchField');
      let searchText = searchTextElement.value;

      // 1.1. Clear styles from previous search
      tableRowsElement.forEach(el => {
         el.className = '';
      })
      // 2. Match row elements to text
      // 3. Modify style for matching rows
      let filteredRows = tableRowsElement.filter(el => {
         let cells = Array.from(el.children);
         if (cells.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      })

      // 4. Clear text field
      searchTextElement.value = '';
   }
}