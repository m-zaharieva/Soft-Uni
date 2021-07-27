import requests from "./httpRequests.js";
import {html, render} from '../node_modules/lit-html/lit-html.js';
import templates from "./templates.js";

async function solve() {
   let result = [];
   let tableBody = document.querySelector('tbody');
   let data = await requests.getRowData();

   Object.values(data).forEach(student => {
      let tableRow = templates.tableRow(student);
      result.push(tableRow); 
   });

   render(result, tableBody);


   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick(e) {
      let input = e.target.previousElementSibling;
      let value = input.value;
      
      let allTr = document.querySelectorAll('tbody tr');
      
      [...allTr].forEach(tr => tr.classList.remove('select'));

      [...allTr].forEach(tr => {
         let tds = tr.querySelectorAll('td');
         [...tds].forEach(td => {
            if ((td.textContent.toLocaleLowerCase()).includes(value.toLocaleLowerCase())) {
               tr.classList.add('select');
            }
         });
      });
     
      input.value = '';

      
      
   }
}

solve();