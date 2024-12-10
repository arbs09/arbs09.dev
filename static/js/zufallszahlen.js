const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');

generateBtn.addEventListener('click', () => {
    const minInput = document.getElementById('min').value.trim();
    const maxInput = document.getElementById('max').value.trim();

    const min = parseInt(minInput);
    const max = parseInt(maxInput);

    if (isNaN(min) || isNaN(max) || min >= max || min < 0 || max < 0) {
        output.textContent = "Ungültige Eingabe! Bitte gültige Zahlen eingeben.";
        output.classList.add("text-red-500");
        return;
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    output.textContent = randomNumber;
    output.classList.remove("text-red-500");
});
