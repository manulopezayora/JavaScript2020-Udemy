/*
 ! Callbacks
 ? Un callback es una función que se ejecuta a través de otra función.
 ? Los callbacks no son asincronos, es decir, se ejecutan por orden.
*/

//! Caso 1

// cb -> abreviatura de callback
const getUser = (id, cb) => {
  const user = {
    name: "Manuel",
    id, // Si el parámetro se llama igual, se puede omitir el valor. Es lo mismo que id: id,
  };

  // cb(null, user); // Se ejecuta (err, user) =>{}

  if (id == 2) cb("User not exist");
  else cb(null, user); //? null -> No hay error y muestra el usuario
};

// Esta función se ejecuta dentro de getUser() en cb()
getUser(1, (err, user) => {
  if (err) return console.error(err);
  console.info(`Username is: ${user.name}`);
});

/*
 ? En este ejemplo de callback:
 * - Creamos la función getUser(id, cb) con el parámetro id y el callback.
 * - Dentro de la función creamos el objeto user con los atributos name e id.
 * - Llamamos a la función pasandole por parámetro el id y la función de callback. En este caso la función de callback tiene 2 parámetros, el error y el user. Dentro, el condicional verifica si hay error o no. Si hay error retorna el console.error del error, y si esta todo bien, devuelve el mensaje "Username is ${user.name}"
 * - Volvemos dentro de la función donde se ejecutará nuestro callback a través de un condicional. Si el id es igual a 2 se ejecutará que el usuario no existe. Si el error  es null se muestra el else de nuestro callback
 * 
 * Simula una consulta. Si la consulta sale bien devuelve el usuario y si algo sale mal devuelve el error.
 * 
 * Es el funcionamiento de una consulta.
 */

//! Caso 2

// ? Este array de objetos es para simular que es una base de datos de usuarios

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

const getUser2 = (id, cb) => {
  // El user del parámetro de la funcion es una variable temporal
  const user = users.find((user) => user.id == id);

  if (!user) cb(`User id: ${id} is not exist.`);
  else cb(null, user);
};

// ? Función para recuperar el email:
const getEmail = (user, cb) => {
  const email = emails.find((email) => email.id == user.id);

  if (!email) cb(`Username: ${user.name} hasn't got an Email.`);
  else
    cb(null, {
      id: user.id,
      name: user.name,
      email: email.email,
    });
};

getUser2(1, (err, user) => {
  if (err) return console.error(err);
  // No es un else, Si entra en el if finaliza la ejecución por el return. No hace falta un else aquí.
  getEmail(user, (err, resp) => {
    if (err) return console.error(err);
    console.log(resp);
  });
});

// ! cuando el código es muy grande pueden complicarse los callback. Se puede dar el caso de que se aniden funciones de callback de esta manera:

/*
getUser2(1, (err, user) => {
  if (err) return console.error(err);
  getEmail(user, (err, resp) => {
    if (err) return console.error(err);
    getEmail(user, (err, resp) => {
      if (err) return console.error(err);
      getEmail(user, (err, resp) => {
        if (err) return console.error(err);
        getEmail(user, (err, resp) => {
          if (err) return console.error(err);
          console.log(resp);
        })
      })
    })
  });
});

! No es un código escalable ni mantenible a la larga. Por eso se inventaros las PROMESAS.
 */
