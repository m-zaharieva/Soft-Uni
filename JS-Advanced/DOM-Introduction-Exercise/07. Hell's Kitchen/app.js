function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      // 1. Select TextArea Element
      let textAreaElement = document.querySelector('#inputs textarea');

      // 2. Extract textarea value and create array from it
      let text = textAreaElement.value.split('\"').filter(x => x.length > 2);

      // 2. transform Textarea Value to an Object
      let restaurantsCatalogue = {};

      for (let i = 0; i < text.length; i++) {
         let [name, employees] = text[i].split(' - ');
         let employeesArr = employees.split(', ');

         // the case when the name of the restaurant is not present in the object. 
         if (!restaurantsCatalogue.hasOwnProperty(name)) {
            // create subObjectg, where tyhe key is the restaurant name, and te value is an object, including employees, and salaries
            restaurantsCatalogue[name] = {
               employees: {},
               avarageSallery: 0,
               heiestSallery: 0
            }
            // filling the object, which is a value to employees' key
            for (let i = 0; i < employeesArr.length; i+=2) {
               restaurantsCatalogue[name].employees[employeesArr[i]] = Number(employeesArr[i+1]);
            }

            // finding the avarage sallery
            let sumOfSalleries = Object
               .values(restaurantsCatalogue[name].employees)
               .reduce((acc, x) => {return acc + x}, 0);

            restaurantsCatalogue[name].avarageSallery = 
            sumOfSalleries / (Object.values(restaurantsCatalogue[name].employees)).length;

            // finding the highest sallery
            restaurantsCatalogue[name].heiestSallery = Math.max(...Object.values(restaurantsCatalogue[name].employees));

         } else {

         }
      }

      
      // 3. Calculate avarage sallery and highest sallery 
      
   }
}

