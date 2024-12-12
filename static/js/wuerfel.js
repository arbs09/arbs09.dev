document.getElementById("rollButton").addEventListener("click", function() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Ergebnis: ${diceRoll}`;
  });