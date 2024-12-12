function calculatePercentage() {

    document.getElementById('error-message').textContent = '';
    document.getElementById('result').textContent = '';

    const amountInput = document.getElementById('amount').value;
    const percentageInput = document.getElementById('percentage').value;

    if (!isValidInput(amountInput) || !isValidInput(percentageInput)) {
        document.getElementById('error-message').textContent = 'Bitte geben Sie gültige Zahlen ein!';
        return;
    }

    const amount = parseFloat(amountInput);
    const percentage = parseFloat(percentageInput);

    const result = (amount * percentage) / 100;

    document.getElementById('result').textContent = `Das ${percentage}% von ${amount} ist: ${result.toFixed(2)}`;
}

function isValidInput(input) {
    const num = parseFloat(input);
    return !isNaN(num) && num >= 0;
}