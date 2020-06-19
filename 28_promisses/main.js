// ! Una promesa es un objeto que dentro tiene dos callbaks
// * Partimos del ejemplo anterior. Promesas en línea 32.

const users = [
  {
    id: 1,
    name: "Manuel",
  },
  {
    id: 2,
    name: "Lourdes",
  },
  {
    id: 3,
    name: "Kenai",
  },
];

const emails = [
  {
    id: 1,
    email: "manuel@gmail.com",
  },
  {
    id: 2,
    email: "lourdes@gmail.com",
  },
];

// ? Se va a pedir un usuario y con la respuesta del usuario se solicitará el email:

const getUser = (id) => {
  // El user del parámetro de la funcion es una variable temporal
  const user = users.find((user) => user.id == id);
  // En los parámetros del constructor de la promesa metemos los callbacks que traen por defecto.
  return (promise = new Promise((resolve, reject) => {
    // Los callbacks por defecto:
    // resolve -> Se ejecuta cuando todo salga bien.
    // reject -> Se ejecuta cuando no sale bien.

    if (!user) reject(`User id: ${id} is not exist.`);
    else resolve(user); // Aquí solo entra si va bien, entonces solo necesitamos un parámetro.
  }));

  // Devolvemos la promesa
  // return promise;
  // O se puede poner donde declaramos la promesa
};

// ? Función para recuperar el email:
const getEmail = (user) => {
  const email = emails.find((email) => email.id == user.id);

  return (promise = new Promise((resolve, reject) => {
    if (!email) reject(`Username: ${user.name} hasn't got an Email.`);
    else
      resolve({
        id: user.id,
        name: user.name,
        email: email.email,
      });
  }));

  // Devolvemos la promesa
  // return promise;
  // O se puede poner donde declaramos la promesa
};

// Ahora getUser solo recibe un parámetro y no necesita función callback
// Accedemos a los valores mediante los métodos de las promesas.

// getUser(1).then((user) => console.log(user)).catch((err) => console.log(err));
getUser(3)
  .then((user) => getEmail(user)) // Si ponemos llaves necesitamos return
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err));

// console.log(getUser(1)); //? Devuelve una promesa. Estado "fulfilled" (terminado) y el value
