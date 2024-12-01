document.addEventListener('DOMContentLoaded', () => {
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resultDiv = document.getElementById('result');
    const modeSelector = document.getElementById('mode');
    const inputField = document.getElementById('groupInput');

    randomizeBtn.addEventListener('click', () => {
        const namesInput = document.getElementById('names').value.trim();
        const inputValue = parseInt(inputField.value);
        const mode = modeSelector.value;

        if (!namesInput || isNaN(inputValue) || inputValue <= 0) {
            resultDiv.innerHTML = "<p class='text-red-500'>Bitte geben Sie gültige Daten ein!</p>";
            return;
        }

        const names = namesInput
            .split(/[\n, ]+/)
            .map(name => name.trim())
            .filter(name => name); 

        if (mode === "groups" && names.length < inputValue) {
            resultDiv.innerHTML = "<p class='text-red-500'>Nicht genug Personen für die Anzahl der Gruppen!</p>";
            return;
        }

        if (mode === "people" && inputValue > names.length) {
            resultDiv.innerHTML = "<p class='text-red-500'>Zu wenig Personen für die Gruppengröße!</p>";
            return;
        }

        for (let i = names.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [names[i], names[j]] = [names[j], names[i]];
        }

        let groups = [];

        if (mode === "groups") {

            groups = Array.from({ length: inputValue }, () => []);
            names.forEach((name, index) => {
                groups[index % inputValue].push(name);
            });
        } else if (mode === "people") {

            while (names.length) {
                groups.push(names.splice(0, inputValue));
            }
        }

        // Display groups
        resultDiv.innerHTML = groups.map((group, i) => `
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-blue-700">Gruppe ${i + 1}</h3>
                <ul class="list-disc pl-5 text-gray-700">
                    ${group.map(name => `<li>${name}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    });
});
