const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');

generateBtn.addEventListener('click', () => {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        output.textContent = "Ungültige Eingabe!";
        output.classList.add("text-red-500");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    output.textContent = randomNumber;
    output.classList.remove("text-red-500");
});