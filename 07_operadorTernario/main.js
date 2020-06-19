// Operador Ternario

// (condición) ? true : false;

let respuesta = false;

respuesta ? console.info("Verdadero") : console.info("Falso");

let num = 2;

num % 2 == 0 ? console.log(`${num} es par`) : console.log(`${num} es impar`);

// varias sentencias
num % 2 == 0
  ? (console.log(`${num} es par`), console.log(`${num} es guay`))
  : console.log(`${num} es impar`);

let edad = prompt("Introduce tu edad");

edad >= 18
  ? (console.log("Eres mayor de edad"),
    console.info(`Tienes ${edad} años.`),
    console.info("Puedes pasar."))
  : (console.warn("Eres menor de edad"),
    console.error(`Tienes ${edad} años`),
    console.error("No puedes pasar"));
