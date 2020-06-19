/*
! Destructuring assignment

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

- La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos

*/

//TODO: Objetos

const user = {
  name: "Manuel",
  age: 34,
  email: "manu@manuel.com",
};

// * Forma normal
// const name = user.name;
// const age = user.age;
// const email = user.email;
// * El problema es que abusamos demasiado de llamar al objeto user.

// * Destructing:
const { name, age, email } = user;
// Entre llaves van las propiedades del objeto que serán las variables. Se puede cambiar el nombre asignandolo en la propiedad
//? Ejemplo: const { name: nombre, age, email } = user;
//* console.log(nombre, age, email)

console.log(name, age, email);

//TODO: Arrays

const numbers = [1, 2, 3, 4, 5];

//* Forma normal:
console.log(numbers[0]);

//* Destructuring:
const [a, b, c, d, e] = numbers;
// no es necesario rellenar todas las posiciones
// const [a, b, c] -> console.log(c)
//* Lo importante es que SI hay que rellenar las posiciones que esten antes de la variable que vamos a llamar. En este ejemplo: const [c] = numbers -> console.log(c) == c sería la posicion 0 del array

console.log(a, b, c, d, e);
console.log(b, d, e);

//* Destructuring en funciones:
/*
const printUser = ({ name: nombre }) => {
  console.log(nombre);
};
*/

const printUser = ({ name }) => {
  console.log(name);
};

printUser(user);

//* Destructuring de peticiones a través de AXIOS:
//? Normal
const getUsers = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");

  console.log(users);
  // para consegiur lo mismo que con destructuración habria qye hacer un console.log(users.data)
};

getUsers();

//? Destructuring
const getUsersDestructuring = async () => {
  // {asignamos el objeto data y lo asigna a users}
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(users);
};

getUsersDestructuring();
