/*

const object = {
  // Propiedades: valor;
  // Métodos
}

*/

const computer = {
  screenSize: 17,
  model: "MacBook Pro",
};

console.log(computer.screenSize);

const table = {
  material: "wood",
  width: 160,
  height: 110,
};

console.log(table.width);

const person = {
  name: "Manuel",
  age: 34,
  sons: ["Laura", "Diego", "María", "Tomás"],
};
console.log(person.name);
console.log(person.age);
console.log(person.sons[0]);
console.log(person.sons[1]);

for (key in person) {
  console.log(key);
}

for (key in person) {
  console.log(person[key]);
}

// Si usamos un bucle for of con objetos da error.

// Al hacer referencia a person.sons lo trata como Array y si funciona.
for (const son of person.sons) {
  console.log(son);
}

console.info(
  `Hola ${person.name} de ${person.age}. Tus hijos son ${person.sons.join(
    ", "
  )}.`
);
