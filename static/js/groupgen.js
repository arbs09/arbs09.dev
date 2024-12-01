document.addEventListener('DOMContentLoaded', () => {
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resultDiv = document.getElementById('result');
    const modeSelector = document.getElementById('mode');
    const inputField = document.getElementById('groupInput');
    const extraGroupCheckbox = document.getElementById('extraGroup');

    randomizeBtn.addEventListener('click', () => {
        const namesInput = document.getElementById('names').value.trim();
        const inputValue = parseInt(inputField.value);
        const mode = modeSelector.value;

        // Clear previous results
        resultDiv.innerHTML = "";

        // Validate inputs
        if (!namesInput || isNaN(inputValue) || inputValue <= 0) {
            resultDiv.innerHTML = "<p class='text-red-500'>Bitte geben Sie gültige Daten ein!</p>";
            return;
        }

        const names = namesInput
            .split(/[\n, ]+/)
            .map(name => name.trim())
            .filter(name => name);

        // Check for insufficient people
        if ((mode === "groups" && names.length < inputValue) || 
            (mode === "people" && inputValue > names.length)) {
            resultDiv.innerHTML = "<p class='text-red-500'>Bitte geben Sie gültige Daten ein!</p>";
            return;
        }

        // Shuffle names array
        for (let i = names.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [names[i], names[j]] = [names[j], names[i]];
        }

        let groups = [];
        let leftover = [];

        if (mode === "groups") {
            // Create groups
            groups = Array.from({ length: inputValue }, () => []);
            names.forEach((name, index) => {
                groups[index % inputValue].push(name);
            });

            // Handle extra group logic
            if (extraGroupCheckbox.checked && names.length % inputValue !== 0) {
                leftover = groups.flat().splice(names.length - (names.length % inputValue));
                groups = groups.slice(0, inputValue);
                if (leftover.length) groups.push(leftover);
            }
        } else if (mode === "people") {
            // Create groups of a specific size
            while (names.length) {
                if (names.length < inputValue) {
                    if (!extraGroupCheckbox.checked) {
                        resultDiv.innerHTML = "<p class='text-red-500'>Bitte geben Sie gültige Daten ein!</p>";
                        return;
                    }
                    leftover = names.splice(0, names.length);
                } else {
                    groups.push(names.splice(0, inputValue));
                }
            }

            if (extraGroupCheckbox.checked && leftover.length > 0) {
                groups.push(leftover);
            }
        }

        // Render groups
        resultDiv.innerHTML = groups.map((group, i) => `
            <div class="mb-4">
                <h3 class="text-lg font-semibold ${i === groups.length - 1 && leftover.length ? 'text-red-500' : 'text-blue-700'}">
                    ${i === groups.length - 1 && leftover.length ? 'Extra' : 'Gruppe ' + (i + 1)}
                </h3>
                <ul class="list-disc pl-5 text-gray-700">
                    ${group.map(name => `<li>${name}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    });
});
