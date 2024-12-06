function calculateGrade() {
    const gradesInputElement = document.getElementById('grades');
    const klassenarbeitElement = document.getElementById('klassenarbeit');
    const wertungGradesElement = document.getElementById('wertungGrades');
    const wertungKlassenarbeitElement = document.getElementById('wertungKlassenarbeit');
    const resultElement = document.getElementById('result');

    if (!gradesInputElement || !klassenarbeitElement || !wertungGradesElement || !wertungKlassenarbeitElement || !resultElement) {
        console.error("Fehler: Ein oder mehrere Eingabefelder fehlen.");
        return;
    }

    const gradesInput = gradesInputElement.value.trim();
    const klassenarbeit = parseFloat(klassenarbeitElement.value);
    const wertungGrades = parseFloat(wertungGradesElement.value);
    const wertungKlassenarbeit = parseFloat(wertungKlassenarbeitElement.value);

    if (isNaN(klassenarbeit) || klassenarbeit < 0 || klassenarbeit > 6) {
        resultElement.textContent = "Fehler: Klassenarbeitsnote muss eine Zahl zwischen 0 und 6 sein.";
        resultElement.classList.add('text-red-500');
        return;
    }

    if (isNaN(wertungGrades) || wertungGrades < 0 || wertungGrades > 100 || 
        isNaN(wertungKlassenarbeit) || wertungKlassenarbeit < 0 || wertungKlassenarbeit > 100) {
        resultElement.textContent = "Fehler: Wertungen müssen Zahlen zwischen 0 und 100 sein.";
        resultElement.classList.add('text-red-500');
        return;
    }

    if (wertungGrades + wertungKlassenarbeit !== 100) {
        resultElement.textContent = "Fehler: Die Wertungen müssen zusammen 100% ergeben.";
        resultElement.classList.add('text-red-500');
        return;
    } else {
        resultElement.classList.remove('text-red-500');
    }

    const grades = gradesInput
        .split(/[\s,]+/)
        .map(grade => parseFloat(grade))
        .filter(grade => !isNaN(grade) && grade >= 0 && grade <= 6);

    if (grades.length === 0) {
        resultElement.textContent = "Fehler: Bitte geben Sie gültige Noten (zwischen 0 und 6) ein.";
        resultElement.classList.add('text-red-500');
        return;
    }

    const averageGrades = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    const finalGrade = (averageGrades * (wertungGrades / 100)) + (klassenarbeit * (wertungKlassenarbeit / 100));

    resultElement.textContent = `Endnote: ${finalGrade.toFixed(2)}`;
    resultElement.classList.remove('text-red-500');
    resultElement.classList.add('text-blue-700');
}
