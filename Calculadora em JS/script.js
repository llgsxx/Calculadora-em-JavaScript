
        let currentInput = '';
        let operator = '';
        let previousInput = '';
        const display = document.getElementById('display');

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        }

        function appendNumber(number) {
            if (currentInput === '' && number === '0') return; // Prevent multiple leading zeros
            currentInput += number;
            display.textContent = currentInput;
        }

        function appendOperator(op) {
            if (currentInput === '') return; // Prevents adding operators before entering a number
            previousInput = currentInput;
            currentInput = '';
            operator = op;
        }

        function appendDot() {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                display.textContent = currentInput;
            }
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        }

        function calculate() {
            if (currentInput === '' || previousInput === '' || operator === '') return;

            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 === 0 ? 'Erro' : num1 / num2;
                    break;
                default:
                    return;
            }

            display.textContent = result;
            currentInput = result.toString();
            previousInput = '';
            operator = '';
        }