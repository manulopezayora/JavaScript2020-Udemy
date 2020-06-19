/*

1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola \_**\_, tienes \_\_** años y el año que viene tendrás \_\_\_\_ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

*/

let name = prompt("Escribe tu nombre");
let age = parseInt(prompt("Escribe tu edad"));

console.log(
  `Hola ${name}, tienes ${age} años y el año que viene tendrás ${age + 1} años.`
);
