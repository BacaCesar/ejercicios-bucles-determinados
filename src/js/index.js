// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countdown = (number) => {
  for (let index = number; index >= 0; index--) {
    console.log(index);
  }
};
countdown(10);

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumarArray = (numeros) => {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  console.log(suma);
};

const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumarArray(arrayDeNumeros);

//- Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//4 x 0 = 0
//4 x 1 = 4
//4 x 2 = 8
//4 x 3 = 12
//4 x 4 = 16
// 4 x 5 = 20
//4 x 6 = 24
//4 x 7 = 28
// 4 x 8 = 32
//4 x 9 = 36
// 4 x 10 = 40

const multiplicationTable = (numero) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
};

multiplicationTable(5);

//- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//4 x 10 = 40
//4 x 9 = 36
//4 x 8 = 32
//4 x 7 = 28
//4 x 6 = 24
//4 x 5 = 20
//4 x 4 = 16
//4 x 3 = 12
//4 x 2 = 8
//4 x 1 = 4
//4 x 0 = 0

const inverseMultiplicationTable = (numero) => {
  for (let i = 10; i >= 0; i--) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
};

inverseMultiplicationTable(4);

//- Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//  - "naciste en el año X"
//  - "En el año X cumpliste 1 año"
// - "En el año X cumpliste 2 años"
// - "En el año X cumpliste 3 años"
//  ....

const currentYearAndAge = (actualYear, age) => {
  const bornYear = actualYear - age;

  console.log(`Naciste en el año ${bornYear}`);

  for (let i = 1; i <= age; i++) {
    const yearCompleted = bornYear + i;
    console.log(`En el año ${yearCompleted} cumpliste ${i} años`);
  }
};

currentYearAndAge(2024, 37);

//- Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const evenNumbers = (number1, number2) => {
  if (number1 % 2 !== 0) {
    number1 += 1;
  }
  for (let i = number1; i <= number2; i += 2) {
    console.log(i);
  }
};
evenNumbers(2, 12);

//- Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const twoArrays = () => {
  const arrayA = [];
  const arrayB = [];
  for (let i = 0; i < 5; i++) {
    const randomNumberA = Math.floor(Math.random() * 10);
    const randomNumberB = Math.floor(Math.random() * 10);
    arrayA.push(randomNumberA);
    arrayB.push(randomNumberB);
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA.includes(arrayB[i])) {
      console.log(`El número ${arrayB[i]} se repite`);
    }
  }
  console.log(arrayA);
  console.log(arrayB);
};
twoArrays();

//- Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo.

const isPrime = (number) => {
  if ((number < 2 && number !== 2) || number % 2 === 0) {
    console.log(`El número ${number} no es primo`);
    return;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`El número ${number} no es primo`);
      return;
    }
  }
  console.log(`El número ${number} es primo`);
};
isPrime(12);

//- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
// "Número: 2 - Cuadrado: 4 - Cubo: 8".
// Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const printArray = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let square = Math.pow(number, 2);
    let cube = Math.pow(number, 3);
    console.log(`Numero ${number} - Cuadrado ${square} - Cubo ${cube}`);
  }
};
printArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

//- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const capitalsVowels = (word) => {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (["a", "e", "i", "o", "u"].includes(letter)) {
      newWord = newWord + letter.toUpperCase();
    } else {
      newWord = newWord + letter;
    }
  }
  console.log(newWord);
};
capitalsVowels("Madrid");

//- Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//a: 3,
//e: 3,
//i: 1,
//o: 1,
//u: 1

const newPhrase = (phrase) => {
  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;

  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase[i];
    if (letter === "a") {
      a++;
    } else if (letter === "e") {
      e++;
    } else if (letter === "i") {
      i++;
    } else if (letter === "o") {
      o++;
    } else if (letter === "u") {
      u++;
    }
  }
  console.log(phrase);
  console.log(`a=${a} e=${e} i=${i} o=${o} u=${u}.`);
};
newPhrase("Me cago en todos tus muertos");

//- Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const twoWords = (wordA, wordB) => {
  let newWord = "";
  for (let i = 0; i < wordA.length; i++) {
    newWord = newWord + wordA[i] + wordB[i];
  }
  console.log(newWord);
};
twoWords("hola", "adios");

//- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

const invertWord = (word) => {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  console.log(newWord);
};
invertWord("Mariposas");

//Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const newArray = (array) => {
  let even = [];
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let result = number * randomNumber;
    if (result % 2 === 0) {
      even.push(result);
    } else {
      odd.push(result);
    }
  }
  console.log(`El array original es ${array}, el Array de pares es ${even}, el Array de impares es ${odd}.`);
};
newArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//- Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

const fiveWords = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let firstLetter = word.charAt(0).toUpperCase();
    let finalLetter = word.charAt(word.length - 1).toUpperCase();
    newArray.push(firstLetter, finalLetter);
  }
  console.log(newArray);
};
fiveWords(["hola", "adios", "gato", "perro", "casa"]);
