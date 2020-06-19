/*

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

*/

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];
const color = prompt("Escribe un color").toLowerCase();

if (colors.indexOf(color) != -1) {
  // Si es distinto a -1 es porque lo ha encontrado
  console.log(`El color ${color} está dentro de la lista.`);
} else {
  console.log(`El color ${color} no está dentro de la lista.`);
}

// for (i = 0; i < colors.length; i++) {
//   if (color == colors[i]) {
//     console.log(`El color ${color} está dentro de la lista.`);
//     break;
//   } else {
//     console.log(`El color ${color} no está dentro de la lista.`);
//     break;
//   }
// }
