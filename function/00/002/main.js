//Übung 0
function bakeCake(sorte) {
    console.log("Ein" + sorte + "Kuchen wird gebacken!");
}
  
bakeCake(" Schokoladen ");

// Übung 1
function petName(Buddy) {
    console.log(Buddy);
  }
  let Buddy = "golden retriever";
  petName(Buddy);

  //Übung 2 (Summe berechnen)
  function calcSum(a, b){
    const sum = a + b;

  console.log("Die Summe von " + a + " und " + b + " ist " + sum);
}

calcSum (3, 5);
calcSum (10, 20);
calcSum (-4, 6);
calcSum (7, 7);

//Übung 3 (Total berechnen)

function calcTotal(coinAmount, pricePerUnit, tax){
    const totalBeforeTax = coinAmount * pricePerUnit;

    const taxAmount = totalBeforeTax * (tax / 100);

    const totalAmount = totalBeforeTax + taxAmount;

    console.log("Der Gesamtbetrag (inklusive " + tax + "% Steuern) beitrag:" +totalAmount.toFixed(2));
}

calcTotal(10, 5, 20);
calcTotal(15, 3.5, 10);
calcTotal(8, 7.25, 15);
calcTotal(20, 2, 5);


//Übung 4 (Maximalen Wert ausgeben)

function calcMax (arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        const maxValue = Math.max(...arr);

        console.log("Der höchste Wert im Array ist: " + maxValue);
    }else {
        console.log("Der parameter ist entweder kein Array oder das Array ist leer.");
    }
}

calcMax([1, 5, 3 ,9,7]);
calcMax([10,23 ,5 ,8 ,19]);
calcMax([-3, -1, -7, -5]);
calcMax([]);
calcMax(["not an array"]);


//Übung 5 (Default Parameter)

function greetUserBy(user, greeting = "Grüezi"){
    console.log(greeting + " , " + user +"!" )
}

greetUserBy("Hans");
greetUserBy("Anna", "Hallo");
greetUserBy("Maria", "Hi");
greetUserBy("John", "Good morning");

//Übung 6 (Unbestimmte Anzahl Parameter)



