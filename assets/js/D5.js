/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log("ES.1", pet);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const petsOrdered = pets.sort();

// console.log("ES.2", petsOrdered);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0; i--) {
  const pet = pets[i];
  console.log("ES.3", pet);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstPet = pets.shift();

pets.push(firstPet);

// console.log("ES.4", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

function randomNumb() {
  const randomNumb = Math.floor(Math.random() * 10);
  return randomNumb;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const alphabetArray = alphabet.split("");
// console.log(alphabetArray);

function randomLetters() {
  const randomLetters = alphabetArray[randomNumb()] + alphabetArray[randomNumb()];
  return randomLetters;
}
// console.log(randomLetters);

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.licensePlate = randomLetters() + randomNumb() + randomNumb() + randomNumb() + randomLetters();
}

// console.log("ES.5", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: "Fiat",
  model: "500",
  color: "white",
  trims: ["dolcevita", "connect"],
  licensePlate: randomLetters() + randomNumb() + randomNumb() + randomNumb() + randomLetters(),
};

cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.trims.pop();
}

// console.log("ES.6", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const firstElement = car.trims[0];
  justTrims.push(firstElement);
}

// console.log("ES.7", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const firstLetter = car.color.charAt(0);
  if (firstLetter === "b") {
    console.log("ES.8", "Fizz");
  } else {
    console.log("ES.8", "Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let index = 0;

while (numericArray[index] !== 32 && index < numericArray.length) {
  console.log(numericArray[index]);
  index++;
}

// OSSERVAZIONE. Ho aggiunto una condizione al while in maniera tale che anche se il numero 32 non è presente nell'array il ciclo while si ferma una volta stampati tutti i suoi elementi.

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const positionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];

  switch (character) {
    case "g":
      positionArray.push(7);
      break;

    case "n":
      positionArray.push(14);
      break;

    case "u":
      positionArray.push(21);
      break;

    case "z":
      positionArray.push(26);
      break;

    case "d":
      positionArray.push(4);
      break;
  }
}

// console.log("ES.10", positionArray);
