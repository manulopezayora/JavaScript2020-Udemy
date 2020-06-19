// let    -> Para declarar variables. Su valor puede cambiar durante la ejecución del programa.
// const  -> Para declarar constantes. Su valor no puede cambiar durante la ejecución del programa.

/*
 *Tipos de datos
 *  Primitivos:
 *    number
 *    string
 *    boolean
 *    undefined
 *    null
 *    symbol
 */

let numero = 5;
let numeroDecimal = 5.5;
let numeroNegativo = -5;

let mensaje = "Hola Mundo";
let mensaje2 = "Hola Mundo";

let verdadero = true;
let falso = false;

let coche;

let nula = null;

let simbolo = Symbol("foo");

const PI = 3.14;

// Diferencias entre var y let

var nombre = "Manuel";

nombre = "Jose";

let edad = 34;
edad = 28;

// 20 000 líneas de código más abajo

var nombre = "Missifú";

// let edad = 50; // Marca error en la consola porque ya esta declarada.
