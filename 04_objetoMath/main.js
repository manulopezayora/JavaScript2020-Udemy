/**
 * Objeto Math
 */

// Math.abs(x) -> Devuelve el valor absoluto de x
// Math.ceil(x) -> Devuelve el entero más grande mayor o igual que un número
// Math.floor(x) -> Devuelve el entero más pequeño menor o igual que un número
// Math.pow(base, exponente) -> Devuelve la potencia.
// Math.sqrt(x) -> Devuelve la raíz cuadrada de x
// Math.random() -> Genera un número pseudoaleatorio entre 0 y 1.
// Math.round(x) -> Devuelve el valor de un número redondeado al entero más cercano.
// Math.sign(x) -> Devuelve el signo de la x, que indica si x es positivo, negativo o cero.

console.log(Math.E); // Muestra la constante de Euler
console.log(Math.PI); // Muestra el número PI

console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5

console.log(Math.ceil(5.25)); // 6

console.log(Math.floor(5.25)); // 5

console.log(Math.pow(2, 5)); // 32

console.log(Math.sqrt(4)); // 2

console.log(Math.random()); // aleatorio entre 0 y 1
console.log(Math.random() * 100); // aleatorio entre 0 y 100
console.log(Math.round(Math.random() * 100)); // Redondeado.

// Math.random() * (max - min) + min;
console.log(Math.round(Math.random() * (20 - 0) + 0)); // Aleatorio entre 1 y 20 ( el valor minimo no sale nunca pero el máximo si)

console.log(Math.round(5.25)); // 5
console.log(Math.round(5.52)); // 6

console.log(Math.sign(5)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
