/*
 * Tipos de Operadores
 *
 * -> Matemáticos
 *
 * Suma/Concatenación +
 * Resta -
 * Multiplicación *
 * División /
 * Módulo %
 *
 * -> Asignación
 *
 * Asignación =
 * Suma y asignación  a += 3 ( a = a + 3)
 * Resta y asignación  a -= 3 ( a = a - 3)
 * Multiplicación y asignación  a *= 3 ( a = a * 3)
 * División y asignación  a /= 2 ( a = a / 2)
 * Módulo y asignación  a %= 2 ( a = a % 2)
 *
 * -> Incrementales / Decrementales
 *
 * Post-Incremento en 1 -> a++
 * Pre-Incremento en 1 -> ++a
 * Post-Decremento en 1 -> a--
 * Pre-Decremento en 1 -> --a
 *
 * -> Lógicos
 *
 * Igual ==
 * Idéntico ===
 * Distinto !
 * Distinto que !=
 * Mayor que >
 * Mayor o igual que >=
 * Menor que <
 * Menor o igual que <=
 * Y (and) &&
 * O (or) ||
 *
 */

// Matemáticos

let a = 5;
let b = 2;

let suma = a + b;
let concatenacion = "Hola" + " " + "Mundo!";
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

console.info(suma);
console.info(concatenacion);
console.info(resta);
console.info(multiplicacion);
console.info(division);
console.info(modulo);

// Incremento / Decremento

let c = 5;
console.log(c);
console.log(c++); // Devuelve 5 y despues suma 1
console.log(++c); // Devuelve 7 porque suma uno al resultado del console.log() de antes.

// Asignación
let d = 15;

d += 5; // d = d + 5;
console.info(d);
d -= 5; // d = d - 5;
console.info(d);
d *= 5; // d = d * 5;
console.info(d);
d /= 5; // d = d / 5;
console.info(d);
d %= 5; // d = d % 5;
console.info(d);

// Lógicos se verán en los condicionales
