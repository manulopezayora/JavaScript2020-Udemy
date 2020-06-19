/*

5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120

*/

let number = parseInt(prompt("Ingrese un número mayor a 0"));
let result = 1;

for (let i = number; i > 0; i--) {
  result *= i; // result = result * i
  // number = 5
  // 1 = 1 * 5
  // 5 = 5 * 4
  // 20 = 20 * 3
  // 60 = 60 * 2
  // 120 = 120 * 1
  // 120
}

console.log(`El factorial de ${number} es = ${result}`);
