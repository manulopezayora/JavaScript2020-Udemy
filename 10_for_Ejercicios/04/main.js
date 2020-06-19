/*

4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.
Un número primo es aquel que solo es divisible por sí mismo y la unidad

 */

let number = parseInt(prompt("Ingrese un nuvero para saber si es primo o no."));
let count = 0;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    console.log(`El número ${number} no es primo`);
    count++;
    break;
  }
}

if (count == 0) {
  console.log(`El número ${number} es primo`);
}
