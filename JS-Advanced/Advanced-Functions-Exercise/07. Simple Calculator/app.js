function calculator() {
    let commands = {
        init(selector1, selector2, resultSelector) {
            commands.firstNumberInput = document.querySelector(`${selector1}`);
            commands.secondNumberInput = document.querySelector(`${selector2}`);
            commands.resultInput = document.querySelector(`${resultSelector}`);
        },

        add() {
            let firstValue = Number(this.firstNumberInput.value);
            let secondValue = Number(this.secondNumberInput.value);
            this.resultInput.value = firstValue + secondValue
            // this.firstNumberInput.value = '';
            // this.secondNumberInput.value = '';
        }, 

        subtract() {
            let firstValue = Number(this.firstNumberInput.value);
            let secondValue = Number(this.secondNumberInput.value);
            this.resultInput.value = firstValue - secondValue
        }
    }

    return commands;
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




