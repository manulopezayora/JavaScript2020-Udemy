// ! Async - Await

// Sirve para hacer funciones asincronas. En el caso del ejemplo con la función getName() tiene un setTimeOut() de un segundo y medio. Cuando la funcion sayName() busque la constante que devuelve la función getName no la tiene y devuelve una promesa. Para hacer la función asincrona se hace con async y con await le establecemos paradas de ejecución para que se carguen las variables que necesitemos.

const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Manuel");
    }, 1500);
  });
};

// getName() nos devuelve una promesa, para verlo en consola es:
// getName().then((name) => console.log(name));

const sayHello = async () => {
  const name = await getName();
  //* await establece un bloqueo hasta que setName() se resuelva
  return `Hello ${name}`;
};

//* Devuelve una promesa.
sayHello().then((msg) => console.log(msg));
