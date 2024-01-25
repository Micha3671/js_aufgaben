function aufgabe1(inputString) {
    if (typeof inputString !== 'string') {
        console.error("Fehler: Das Argument muss ein String sein.");
        return;
    }

    let reversedString = inputString.split('').reverse().join('');
    console.log(reversedString);
}

// Beispielaufruf
aufgabe1("Hallo Welt!");