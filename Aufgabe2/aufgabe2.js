const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

rl.question('Bitte geben Sie die Temperatur in Celsius ein: ', (answer) => {
  const celsius = parseFloat(answer);

  if (isNaN(celsius)) {
    console.error('Fehler: Bitte geben Sie eine gültige Zahl für die Temperatur ein.');
    rl.close();
    return;
  }

  const fahrenheit = convertCelsiusToFahrenheit(celsius);
  console.log(`${celsius} Grad Celsius entsprechen ${fahrenheit.toFixed(2)} Grad Fahrenheit.`);
  rl.close();
});
