function greet(){
    console.log("Hallo");
}

//Outputs: Hallo
greet()  

// .... placeholde
function bakeCake(flavor){
    
}

// Dies ist der tatsächliche Wert, den Sie verwenden.
bakeCake("chcolate"); 

function petName(Buddy){
    console.log(Buddy);
}
let Buddy = "golden retriver";
petName(Buddy); //Outputs: golden retriever


// Funktion zum Zerkleinern von Gemüse (noch zu implementieren)
function chopVegetables() {
    console.log("Gemüse wird zerkleinert.");
}

// Funktion zum Braten von Gemüse (noch zu implementieren)
function fryVegetables() {
    console.log("Gemüse wird gebraten.");
}


function breakfast(cereal, milk) {/*....*/}
breakfast ("milk", "cereal")  // oops fasch oder

//Übung 8
function sing (){
    console.log("la la la");
}

// Outputs: la la la
sing();

// Übung 9
function calculateArea(radius) {
    let area = 3.14 * radius * radius;
    return area;
  }
  function calculateArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}

let radius = 5;
console.log("Die Fläche des Kreises beträgt: " + calculateArea(radius)); // Outputs: Die Fläche des Kreises beträgt: 78.53981633974483


//Übung 10

function add(a, b){
    return a + b;
}

console.log(add(3, 5));  // Outputs: 8
console.log(add(10, 20));  // Outputs: 30
console.log(add(-2, 7));  // Outputs: 5

//Übung 11

//Übung 11
let person = {
    name: "John ",
    age: 30
}

function displayInfo(person) {
    console.log(person.name + " is " + person.age + " years old");
}

displayInfo(person); // Outputs: John is 30 years old

// Übung 12
function greet() {
    console.log("Hello!");
 }

 

 const greet = function() {
    console.log("Hallo again");
 }

greet();

 

