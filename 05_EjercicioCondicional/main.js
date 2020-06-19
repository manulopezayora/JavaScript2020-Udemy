/*
 * Ordena 3 números de mayor a menor.
 *
 * Permutaciones con 3 elementos
 * Posibilidades = Factorial 3 = 3 * 2 * 1
 *
 * convinación : orden de entrada
 *      abc    -      321
 *      acb    -      312
 *      bac    -      231
 *      bca    -      132
 *      cab    -      213
 *      cba    -      123
 *
 */

let a = prompt("Introduce el primer número");
let b = prompt("Introduce el segundo número");
let c = prompt("Introduce el tercero número");

document.write(`Los números introducidos son: <br />
                >> ${a}, ${b}, ${c}. <br /> `);

document.write(
  "El resultado de los números ordenados de mayor a menor es: <br />"
);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  document.write(
    `>>Has introducido letras en vez de números: ${a} - ${b} - ${c}`
  );
} else if (a == b && a == c) {
  document.write(`>> ${a} - ${b} - ${c} = son iguales`);
} else if (a > b && a > c) {
  if (b > c) {
    document.write(`>> ${a} - ${b} - ${c}`);
  } else {
    document.write(`>> ${a} - ${c} - ${b}`);
  }
} else if (b > a && b > c) {
  if (a > c) {
    document.write(`>> ${b} - ${a} - ${c}`);
  } else {
    document.write(`>> ${b} - ${c} - ${a}`);
  }
} else if (c > a && c > b) {
  if (a > b) {
    document.write(`>> ${c} - ${a} - ${b}`);
  } else {
    document.write(`>> ${c} - ${b} - ${a}`);
  }
} else if (a == b) {
  if (a > c) {
    document.write(`>> ${a} - ${b} - ${c}`);
  } else {
    document.write(`>> ${c} - ${a} - ${b}`);
  }
} else if (a == c) {
  if (a > b) {
    document.write(`>> ${a} - ${c} - ${b}`);
  } else {
    document.write(`>> ${b} - ${a} - ${c}`);
  }
} else if (b == c) {
  if (b > a) {
    document.write(`>> ${b} - ${c} - ${a}`);
  } else {
    document.write(`>> ${a} - ${b} - ${c}`);
  }
} else {
  document.write(
    `>>Te has dejado algún número sin introducir: ${a} - ${b} - ${c}`
  );
}
