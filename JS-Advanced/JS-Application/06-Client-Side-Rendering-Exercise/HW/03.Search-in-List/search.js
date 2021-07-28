import {towns} from "./towns.js"
import {render} from './node_modules/lit-html/lit-html.js'
import { searchTemplate } from "./searchTemplate.js"
let baseTowns = towns.map(town =>({name:town}))
let searchButton = document.getElementById('searchBtn').addEventListener('click', search)
let searchText = document.querySelector('#searchText')
render(searchTemplate(baseTowns),document.getElementById('towns'))

function search() {
   let allTowns = towns.map(town =>({name:town}))
   let lowerCaseText = (searchText.value).toLowerCase()
let filteredTowns = allTowns.filter(town => town.name.toLowerCase().includes(lowerCaseText))
filteredTowns.forEach(town => town.class ="active")

let result = document.getElementById('result')
result.textContent = `${filteredTowns.length} matches found`


render(searchTemplate(allTowns),document.getElementById('towns'))

}
