/**
 * El bucle for es un bucle determinado.
 *
 * Tenemos que indicarle la cantidad de iteracciones que necesitamos.
 * - for (variable contador; condición; incremento / decremento)
 */

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// Imprimir en la web la tabla del 5

for (let i = 0; i <= 10; i++) {
  const tabla = i * 5;
  document.write(`- 5 x ${i} = ${tabla} <br/>`);
}

// Recorrer un array
let numbers = [50, 18, 27, 73, 14, 65];
for (i = 0; i < numbers.length; i++) {
  console.info(numbers[i]);
}

let names = ["Manuel", "José", "Lourdes", "Maria", "Juan"];

// For of
for (let name of names) {
  console.log(name);
}

// For in (se suele usar en arrays porque devuelve la posición del índice)
for (let index in names) {
  console.log(index);
}
