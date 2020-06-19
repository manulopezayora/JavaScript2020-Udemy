// function nombreFuncion() {
//   // Código a ejecutar
// }

// const nombreFuncion2 = () => {
//   // Código a ejecutar
// };

// const suma2 = (num1, num2) => console.log(num1 + num2);

// suma2(5, 5);

const saludar = () => console.log("Hola Mundo!");
const saludarUsuario = (usuario) => console.log(`Hola ${usuario}`);

saludar();
saludarUsuario("Manuel");

const suma = (num1, num2) => num1 + num2;
console.log(suma(5, 5));

// Si ponemos las llaves, la función esperará al return
const suma2 = (num1, num2) => {
  num1 + num2;
  return;
};
console.log(suma(5, 5));
// El return corta el código

const suma3 = (a, b) => {
  if (a == 5) {
    return a + b;
  }
  console.log("El primer parámetro no es 5");
  return a;
};

console.log(suma3(5, 5)); // No se ejecuta el resto de la función porque entra en el if y devuelve el resultado con el return.

const suma4 = (num1, num2) => num1 + num2;

let result = suma4(6, 3);

console.log(result);
