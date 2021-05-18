function orders(product, quantity) {
    function calculatePrice() {
        let result = 0;
        switch (product) {
            case 'water':
                result = (1.00 * quantity).toFixed(2); 
                break; 
            case 'coffee':
                result = (1.50 * quantity).toFixed(2);    
            break; 
            case 'coke': 
                result = (1.40 * quantity).toFixed(2);    
            break; 
            case 'snacks':
                result = (2.00 * quantity).toFixed(2);    
            break;
        }

        return result;
    }

    console.log(calculatePrice());
}

orders('water', 5);
