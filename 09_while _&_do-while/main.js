// while y do while

// Son bucles indeterminados (no sabemos cuantas iteracciones han de realizar)

// - while

let pass = "";

// Iterará hasta que la contraseña sea hola (mientras sea diferente a hola)
while (pass != "hola") {
  pass = prompt("Introduce tu contraseña");
}

console.info(`Contraseña: ${pass}`);
console.info("Fin del bucle");

// do... while

let pass2 = "";

// el do siempre se va a ejecutar
do {
  pass2 = prompt("Introduce la segunda contraseña");
} while (pass2 != "hola");

/**
 * El bucle while itera mientras no se resuelva la condicion.
 * Si la condición esta resuelta antes de llegar al while, no se ejecutará.
 *
 * El bucle do... while se ejecutara como mínimo una vez (el do).
 * Después entrara al while a evaluar la condición.
 * Ocurre lo mismo que en el caso anterior, iterará hasta que se cumpla la condicion.
 */
