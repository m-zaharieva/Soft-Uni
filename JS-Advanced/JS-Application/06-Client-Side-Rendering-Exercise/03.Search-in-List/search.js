import { html, render} from '../node_modules/lit-html/lit-html.js';
import templates from './templates.js';
import { towns } from './towns.js';

function setUp(towns) {
   let allLi = [];
   towns.forEach(town => {
      allLi.push(templates.listItems(town));
   });
   let result = templates.ul(allLi);
   render(result, document.querySelector('#towns'));
}
setUp(towns)

function search() {
   let button = document.querySelector('button');
   button.addEventListener('click', searchTown);

}
search();

function searchTown(e) {
   let parent = e.target.closest('article');
   let input = parent.querySelector('input');
   let searchValue = input.value.toLowerCase();

   let liArr = parent.querySelectorAll('li');
   let matches = 0;
   liArr.forEach(li => {
      if (li.textContent.toLowerCase().includes(searchValue)) {
         li.classList.add('active');
         matches++;
      } else if (!li.textContent.toLowerCase().includes(searchValue)) {
         li.classList.remove('active');
      }
   });

   let resultDiv = document.querySelector('#result');
   resultDiv.textContent = `${matches} matches found.`

   input.value = '';
}
