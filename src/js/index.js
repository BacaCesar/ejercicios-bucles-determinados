// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countdown=(number)=>{
    for (let index = number; index >=0; index--){
        console.log(index)
    }
}
countdown(10);

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.


function sumarArray(numeros) {
 

  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  console.log(suma);
}

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

 function multiplicationTable(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

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

  function inverseMultiplicationTable(numero) {
  for (let i = 10; i >= 0; i--) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

inverseMultiplicationTable(4);

//- Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//  - "naciste en el año X"
//  - "En el año X cumpliste 1 año"
 // - "En el año X cumpliste 2 años"
 // - "En el año X cumpliste 3 años"
  //  ....

  function currentYearAndAge(actualYear, age) {
  const bornYear = actualYear - age;
  
  console.log(`Naciste en el año ${bornYear}`);
  
  for (let i = 1; i <= age; i++) {
    const yearCompleted = bornYear + i;
    console.log(`En el año ${yearCompleted} cumpliste ${i} año${i > 1 ? 's' : ''}`);
  }
}

currentYearAndAge(2024, 37);
