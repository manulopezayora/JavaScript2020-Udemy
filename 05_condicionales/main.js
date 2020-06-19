let num = 5;

// Condicional simple
if (num > 0) console.log(`El número ${num} es mayor que 0.`);

// Si necesitamos varias lineas de instrucciones es obligatorio usar las {}
if (num == 5) {
  console.log("Se lee estas líneas");
  console.log(`El número ${num} es es igual a 5. `);
}

// Condicional compuesto
if (num > 0) {
  console.log(`El número ${num} es mayor que 0.`);
} else {
  console.warn(` El número ${num} no es mayor que 0.`);
}

// Condicional múltiple
num = 0;

if (num > 0) {
  console.log(`El número ${num} es mayor que 0.`);
} else if (num < 0) {
  console.log(`El número ${num} es menor que 0.`);
} else {
  console.log(`El número ${num} es igual a 0.`);
}

// **********************************************************************
// and (&&) or (||)
let num1 = 0;
let num2 = 5;

if (num > 0 && num2 > 0) {
  console.log(`${num1} y ${num2} son mayores que 0.`);
} else if (num1 > 0 || num2 > 0) {
  console.warn("Uno de los dos números no es mayor que 0.");
} else {
  console.error("Ningún número es mayor a 0.");
}

// Anidar condicionales
let numero = 0;

if (numero > 0) {
  if (numero < 10) {
    console.log(`El número ${numero} es mayor que 0 pero menor que 10 `);
  } else {
    console.log(`El número ${numero} es mayor que 10.`);
  }
} else {
  console.error("ERROR: El número es menor o igual a 0.");
}

let respuesta = true;
let respuesta2 = false;

if (respuesta) console.log("Respuesta con valor true");
if (!respuesta2) console.log("Respuesta con valor false");
