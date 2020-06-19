/*

6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

*/

let number = 0;
let count = 0;

while (number < 50) {
  number += parseInt(prompt("Ingrese números hasta pasar de 50"));
  count++;
}

console.log(`El total acumulado es ${number}`);
console.log(`Se han introducido ${count} números`);
