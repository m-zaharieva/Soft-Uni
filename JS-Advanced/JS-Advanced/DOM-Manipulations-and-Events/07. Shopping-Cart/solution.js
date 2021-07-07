// function solve() {
//    const arrOfAddButtons = Array.from(document.getElementsByClassName('add-product'));

//    arrOfAddButtons.forEach(ev => {
//       ev.addEventListener('click', onClick)
//    });

//    document.getElementsByClassName('checkout')[0].addEventListener('click', onCheckout);
//    const textAreaPole = document.getElementsByTagName('textarea')[0];
//    let totalPrise = 0; 
//    let products = [];

//    function onClick(el) {
//       let productName = el.target.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
//       let priseOfElement = Number(el.target.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent);
//       let addedProduct = `Added ${productName} for ${priseOfElement.toFixed(2)} to the cart.\n`;
//       totalPrise += priseOfElement;
//       textAreaPole.value += addedProduct;

//       if (!products.includes(productName)) {
//          products.push(productName)
//       }
//    }

//    function onCheckout() {
//       textAreaPole.value += `You bought ${products.join(', ')} for ${totalPrise.toFixed(2)}.`;
//       arrOfAddButtons.map(btn => {
//          btn.disabled = true;
//       });

//       document.getElementsByClassName('checkout')[0].disabled = true;
//    }
// }

function solve() {
   // select elements
   let textareaElement = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let addButtons = document.querySelectorAll('.add-product');
   let products = [];
   let totalPrise = 0;

   // Add event Listener to Add Buttons
   for (const element of addButtons) {
      element.addEventListener('click', (e) => {
         let productName = e.currentTarget
                           .parentElement
                           .parentElement
                           .querySelector('.product-title')
                           .textContent;

         let productPrise = Number(e.currentTarget
                           .parentElement
                           .parentElement
                           .querySelector('.product-line-price')
                           .textContent);

         textareaElement.textContent += `Added ${productName} for ${productPrise.toFixed(2)} to the cart.\n`

         if (!products.includes(productName)) {
            products.push(productName);
         }

         totalPrise += productPrise;
      });
   }

   checkoutButton.addEventListener('click', (e) => {
      textareaElement.textContent += `You bought ${products.join(', ')} for ${totalPrise.toFixed(2)}.`;
      for (const button of addButtons) {
         button.disabled = true;
      }
      
      e.currentTarget.disabled = true;
   });
}