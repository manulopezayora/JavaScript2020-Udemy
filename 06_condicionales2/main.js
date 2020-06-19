// Condicional switch

let num = 3;

// Sintaxis simple
switch (num) {
  case 1:
    console.log(`${num} tiene el valor 1`);
    break;
  case 2:
    console.log(`${num} tiene el valor 2`);
    break;

  default:
    console.warn(`${num} no tiene el valor 1 ni 2`);
    break;
}

// Sintaxis múltiple

switch (num) {
  case 1:
  case 3:
  case 5:
    console.log(`${num} es impar`);
    break;

  case 2:
  case 4:
    console.log(`${num} es par`);
    break;
}

// Sintaxis múltiple encadenada

switch (num) {
  case num < 3:
  case 1:
    console.log("1 es menor que tres");
    break;
  case 2:
    console.log("2 es menor que 3");
    break;
  case num >= 3 && num < 5:
  case 3:
    console.info("Bingo!! es 3!!");
    break;
  case 4:
    console.warn("Te pasaste por un número!");
    break;
  default:
    console.error("Te pasaste demasiado!");
    break;
}
