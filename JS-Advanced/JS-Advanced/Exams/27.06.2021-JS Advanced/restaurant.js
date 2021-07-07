class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(product => {
            let [productName, quantity, totalPrise] = product.split(' ');
            quantity = Number(quantity);
            totalPrise = Number(totalPrise);
            if(totalPrise <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += quantity;
                this.budgetMoney -= totalPrise;
                this.history.push(`Successfully loaded ${quantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${productName}`)
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal].products = neededProducts;
            this.menu[meal].price = price;
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else if (Object.keys(this.menu).length == 0 || Object.keys(this.menu).length >= 2) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            } 
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...'
        } else {
            let result = [];
            Object.keys(this.menu).forEach(meal => {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            })
            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let products = this.menu[meal].products;
            let readyToComplete = true;
            products.forEach(product => {
                let [productName, quantity] = product.split(' ');
                quantity = Number(quantity);
                if(!this.stockProducts.hasOwnProperty(productName) || 
                    (this.stockProducts.hasOwnProperty(productName) && this.stockProducts[productName] < quantity)) {
                        readyToComplete = false;
                    }
            });
            if(readyToComplete) {
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

