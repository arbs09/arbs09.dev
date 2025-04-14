function calculatePercentage() {

    document.getElementById('error-message').textContent = '';
    document.getElementById('result').textContent = '';

    let amountInput = document.getElementById('amount').value;
    let percentageInput = document.getElementById('percentage').value;

    amountInput = amountInput.replace(',', '.');
    percentageInput = percentageInput.replace(',', '.');

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
    const num = parseFloat(input.replace(',', '.'));
    return !isNaN(num) && num >= 0;
}