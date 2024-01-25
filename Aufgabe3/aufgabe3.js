const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

rl.question('Bitte geben Sie die gewünschte Länge des Passworts ein: ', (answer) => {
  const length = parseInt(answer);

  if (isNaN(length) || length <= 0) {
    console.error('Fehler: Bitte geben Sie eine gültige positive Zahl für die Passwortlänge ein.');
    rl.close();
    return;
  }

  const password = generateRandomPassword(length);
  console.log(`Das generierte Passwort lautet: ${password}`);
  rl.close();
});