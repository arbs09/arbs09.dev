document.getElementById('flipCoinBtn').addEventListener('click', function() {
    const result = Math.random() < 0.5 ? 'Kopf' : 'Zahl';
    document.getElementById('coinResult').textContent = result;
});