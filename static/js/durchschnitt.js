function parseGrades(input) {
    return input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
}

function calculateAverage() {
    const grades = parseGrades(document.getElementById('allGrades').value);
    const resultBox = document.getElementById('averageResult');

    if (grades.length === 0) {
        resultBox.textContent = "❗ Bitte gib gültige Noten ein (z. B. 2,3,3,1).";
        return;
    }

    const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
    resultBox.textContent = `✅ Dein Durchschnitt ist: ${avg.toFixed(2)}`;
}