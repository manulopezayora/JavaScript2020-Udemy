/*

2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.

triángulo = b _ h/2
rectángulo = b _ h
círculo = π _ r2 (pi _ radio al cuadrado)

*/

let figure = prompt(
  "Write a geometrical figure: Triangle, Rectangle or Circle"
);
figure = figure.toLowerCase();
let base;
let height;
let radio;

switch (figure) {
  case "triangle":
    base = parseInt(prompt("Add the base"));
    height = parseInt(prompt("Add the height"));
    console.log(`${figure.toUpperCase()} = ` + (base * height) / 2);
    break;
  case "rectangle":
    base = parseInt(prompt("Add the base"));
    height = parseInt(prompt("Add the height"));
    console.log(`${figure.toUpperCase()} = ` + base * height);
    break;
  case "circle":
    radio = parseInt(prompt("Add the radio"));
    console.log(`${figure.toUpperCase()} = ` + Math.PI * Math.pow(radio, 2));
    break;
  default:
    console.info(`Has introducido ${figure} y no es válido.`);
}
