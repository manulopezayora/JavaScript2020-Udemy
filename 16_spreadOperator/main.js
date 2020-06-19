/*
! Spread Operator o Operador de Expansión
? Su sintaxis es ... y lo que hace es expandir el contenido de un array
*/

const numbers = [-12, 2, 3, 23, 43, 2, 3];
console.log(numbers);
console.log(...numbers);

// * Enviar elementos de un array a una función

const addNumbers = (a, b, c) => console.log(a + b + c);

let numbersToAdd = [1, 2, 3];
addNumbers(numbersToAdd); // 1,2,3undefinedundefined //! Falla
addNumbers(...numbersToAdd); //? Si funciona.

// * Añadir un array a otro array

const users = ["javier", "david", "juan", "rosa", "mercedes"];
const newUsers = ["manuel", "lourdes", "kenai"];

users.push(...newUsers);
console.log(users);

// * Copiar arrays

let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [arr1]; //! Así metemos el array dentro de otro array
let arr2 = [...arr1];
console.log(arr2); // arr2 === arr1

// * Concatenar arrays

let concat1 = [1, 2, 3];
let concat2 = [4, 5, 6];

//? let arrayConcat = concat1.concat(concat2);
let arrayConcat = [...concat1, ...concat2];
console.log(arrayConcat);

// * Enviar un número indefinido de argumentos a una función (parámetros REST)
//? Parámetros REST: significa que podemos enviar a una función un número de parámetros indefinido.

const restParam = (...params) => console.info(params);

restParam();
restParam(1, 2, 3, 4);
restParam(1, 2, 3, 4, 5, 6, 7, 8, 9); //* Le pasamos todos los parámetros que necesitemos

// * Librería Math

const numbers2 = [2, 3, 23, 5, 78, 90, 27, 2, 3];

console.log(Math.max(numbers2)); //! NaN
console.log(Math.max(...numbers2));
console.log(Math.min(...numbers2));

// * Eliminar elementos duplicados
console.log(new Set(numbers2)); //* Objeto Set.

const arrayNumbers = [...new Set(numbers2)];
console.log(arrayNumbers); // Array sin elementos repetidos
