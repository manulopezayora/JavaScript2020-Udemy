/*
! Arrays -> Métodos II 
*/

// * .from(iterable)
// ? Convierte en array el elemento iterable.

let word = "Hola Mundo";
console.log(Array.from(word));
console.log(word.split("")); // ? hace lo mismo
console.log(word.split(" ")); // ? separa por el espacio

//? callback -> es una función que ejecuta otra función

// * .sort([callback])
// ? Ordena los elementos de un array alfabéticamente (valor unicode), si le pasamos un callbacklos ordena en función del algoritmo que le pasemos.

const letters = ["b", "f", "g", "q", "z", "a", "p"];
const numbers = [3, 7, 100, 500, 9];
console.log(letters.sort());
console.log(numbers.sort()); //! Ordena mal (valor UNICODE)
console.log(numbers.sort((a, b) => a - b));
//* El funcionamiento del callback es comparar a y b, es decir, compara los pares con a y con b. Después hace la resta:
//? a - b = a > 0 => a > b
//? a - b = a < 0 => a < b
// Ordena en función del resultado de menor a mayor.
// Si queremos ordenar de mayor a menor hay que cambiar el orden de a y b. => b - a
console.log(numbers.sort((a, b) => b - a));

// * .forEach(callback(currentValue, [index]))
// ? Ejecuta la función indicada una vez por cada elemento del array
const numbers2 = [23, 56, 78, 90];
numbers2.forEach((el) => console.log(el)); // el = element (un nombre de variable, le podemos poner cualquiera. el es el más común)
numbers2.forEach((el, index) =>
  console.log(`${el} está en la posición ${index}`)
);

// * .some(callback)
// ? Comprueba si al menos un elemento del array cumple la condición.

// * .every(callback)
// ? Comprueba si todos los elementos del array cumplen la condición

const words = ["HTML", "CSS", "JavaScript", "PHP"];

console.log(words.some((word) => word.length > 2)); // Recorre el array y busca entre los elementos si hay alguno mayor a 2 letras.
console.log(words.every((word) => word.length > 2)); // Recorre el array y comprueba que todos los elementos cumplen la condición.

// !  *** *** *** Muy importantes *** *** ***

const numbers3 = [2, 54, 6, 23, 90, 27];

// * .map(callback)
// ? Transforma todos los elementos del array y devuelve un nuevo array
numbers3.map((number) => console.log(number * 2));
// Es como hacer un for of pero mas óptimo. Además se puede guardar en un array.
const x2 = numbers3.map((number) => number * 2);
console.info(x2);

// * .filter(callback)
// ? Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
const mayor40 = numbers3.filter((number) => number > 40);
console.log(mayor40);

// * .reduce(callback)
// ? Reduce todos los elementos del array a un único valor
console.log(numbers3.reduce((a, b) => a + b));
// devuelve un unico valor con la suma de todos los elementos del array

const users = [
  {
    name: "user 1",
    online: true,
  },
  {
    name: "user 2",
    online: true,
  },
  {
    name: "user 3",
    online: false,
  },
  {
    name: "user 4",
    online: true,
  },
  {
    name: "user 5",
    online: false,
  },
  {
    name: "user 6",
    online: false,
  },
  {
    name: "user 7",
    online: true,
  },
];

const usersOnline = users.reduce((count, user) => {
  if (user.online) count++;
  return count;
}, 0); // Hay que darle un valor inicial a count para que sea un número
console.info(`Hay ${usersOnline} usuarios conectados.`);
