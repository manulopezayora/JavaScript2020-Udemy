/**
 * Strings
 *  .metodos()
 *  .propiedades
 */

let cadena = "Hola Mundo!";

// Métodos
console.log(cadena.toUpperCase()); // Devuelve la cadena en mayúsculas.

console.log(cadena.toLowerCase()); // Devuelve la cadena en minúsculas.

console.log(cadena.indexOf("M")); // Devuelve la posición del parámetro. Si no está en el string devolverá -1.

let cadena2 = "Manuel";
console.log(cadena.replace("Mundo", cadena2)); // Admite dos parámetros. Cambia el primer parámetro por el segundo.

console.log(cadena.substring(2));
console.log(cadena.substring(2, 6)); // Devuelve una cadena desde el indice pasado por parámetros. Acepta un paŕametro obligatorio (inicio del incice) y otro opcional (final del indice).

console.log(cadena.slice(4, -2)); // Igual que substring pero admite valores negativos. Los valores negativos cuentan desde el final al principio. El valor -1 seria la ultima posición del indice.

let cadenaLarga =
  "          Hola, esta es una cadena para explicar el funcionamiento del método trim()                            ";
console.log(cadenaLarga);
console.log(cadenaLarga.trim()); // Elimina los espacios en blanco al principio y al final de la cadena.

// Métodos nuevos de ES6
console.log(cadena.startsWith("H")); // Para saber si la cadena empieza con ese valor. Devuelve true o false.
console.log(cadena.startsWith("M", 5)); // El seundo parámetro sirve para indicar desde que índice empieza a contar el principio.

console.log(cadena.endsWith("!"));
console.log(cadena.endsWith("a", 4));
console.log(cadena.endsWith("Mundo!")); // Lo mismo que startsWith() pero con el final.

console.log(cadena.includes("n")); // Igual que indexOf pero devuelve true o false si encuentra el parámetro en el srting.
console.log(cadena.includes("H", 1)); // False porque empieza a contar desde el indice 1.

console.log(cadena.repeat(2)); // Repite el string el número de veces que le indiquemos en el parámetro.
let cadena3 = "Hola ";
console.log(cadena3.repeat(5));

// Template strings
let nombre = "Manuel";
let apellido = "López";
let edad = 34;

let mensaje = `Hola, soy ${nombre} ${apellido} y tengo ${edad} años. `;
let mensaje2 = `El año que viene tendre ${edad + 1} años. `;
console.log(mensaje);
console.log(mensaje2);

// Propiedades
console.log(cadena.length); // Devuelve la longitud de la cadena.
