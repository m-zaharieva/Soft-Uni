import {html,render} from './node_modules/lit-html/lit-html.js'
import {cats} from "./catSeeder.js";


let rootSectionElement = document.getElementById('allCats');
let catsArray = [...cats]
 let catsTemplate = (catsArray) =>html`
 <ul>
     ${catsArray.map(cat=>html`
     <li>
         <img src="./images/cat${cat.id}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${showHideStuff} >Show status code</button>
                 <div class="status" style="display: none" id="100">
                     <h4>Status Code: ${cat.statusCode}</h4>
                     <p>${cat.statusMessage}</p>
                </div>
            </div>
     </li>
     `)}
</ul>
 `

function showHideStuff(e) {

    let button = e.target
    
    button.textContent =  button.textContent === "Show status code"
    ? "Hide status code"
    : "Show status code"
    
    let statusDiv = e.target.nextElementSibling

    if(statusDiv.style.display === "block"){

        statusDiv.style.display = "none"

    }else{

        statusDiv.style.display = "block"
        
    }
    
}

 render(catsTemplate(catsArray),rootSectionElement)