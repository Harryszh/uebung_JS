function multyply (x) {
    // Funktion wird zurüchgegeben
    return function (y) {
        //Ergebnis wirt angezeigt
        return x * y;

    };
}

const rechnermultyply = multyply (2);

console.log(rechner(5));



function rechner1(x) {
    // Funktionen innerhalb von 'rechner' definieren
    function add() {
        return ++x; // Vor-Inkrement, damit der Wert richtig erhöht wird
    }
    
    function sub() {
        return --x; // Vor-Dekrement, damit der Wert richtig reduziert wird
    }

    // Ein Objekt zurückgeben, das die Methoden enthält
    return {
        add: add,
        sub: sub
    };
}

// Verwendung der 'rechner'-Funktion
const calc = rechner(2);

// Methodenaufrufe und Ausgabe der Ergebnisse
console.log(calc.add()); // Gibt 3 aus (2+1)
console.log(calc.add())



function rechner2(x) {
    // Funktionen innerhalb von 'rechner' definieren
    function add() {
        return ++x; // Vor-Inkrement, damit der Wert richtig erhöht wird
    }
    
    function sub() {
        return --x; // Vor-Dekrement, damit der Wert richtig reduziert wird
    }

    // Ein Objekt zurückgeben, das die Methoden enthält
    return {
        add: add,
        sub: sub
    };
}

// Verwendung der 'rechner'-Funktion
const calc = rechner(2);

// Methodenaufrufe und Ausgabe der Ergebnisse
console.log(calc.sub()); // Gibt 2 aus (3-1)
