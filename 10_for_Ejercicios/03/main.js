/*

3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
si el número es 5 el resultado será:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar

 */

let number = parseInt(prompt("Escribe un número"));

for (let i = 1; i <= number; i++) {
  if (i % 2 == 0) {
    document.write(`${i} es par. <br />`);
  } else {
    document.write(`${i} es impar. <br />`);
  }
}

// let i = 1;
// while (i <= number) {
//   if (i % 2 == 0) {
//     document.write(`${i} es par. <br />`);
//     i++;
//   } else {
//     document.write(`${i} es impar. <br />`);
//     i++;
//   }
// }
