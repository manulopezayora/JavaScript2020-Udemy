/*
 ! Objetos Nativos
*/

const button = document.getElementById("button");

// * Objeto window -> De él descienden todos los objetos
// alert("Text")
// prompt("text", ["valor" || valor])
// confirm("¿Question?")

// * Objeto Console -> Es el objeto que contiene la consola del navegador
// console.log()
// console.dir()
// console.info()
// console.warn()
// console.error()

const person = {
  name: "Manuel",
  age: 34,
  email: "manulopezayora1985@gmail.com",
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(person);
// console.table(person);
// console.table(numbers);

// * Objeto Location -> Es el objeto que contiene la barra de direcciones.
// ? Algunos métodos:
// console.log(location.href); //? toda la url
// console.log(location.protocol); //? http://
// console.log(location.host); //? http://127.0.0.1:5500/
// console.log(location.pathname); //? 24_nativeObjects/index.html
// console.log(location.hash); //? contacto por ejemplo.
// console.log(location.reload()); -> recarga infinito

// * Objeto History -> El historial de la pestaña que esta abierta.
// history.back(); -> Una página hacia atrás
// history.forward(); -> Una página hacia delante.
// history.go(n | -n); -> Un número de páginas hacia delante (positivo) o hacia atrás (negativo)

// length

// console.log(history);
// console.log(history.length);

// * Objeto Date -> Objeto de fecha.

const date = new Date();
console.log(date);

let day;

switch (date.getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miércoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case 6:
    day = "Sábado";
    break;
}

console.log(day);

let month;

switch (date.getMonth()) {
  case 0:
    month = "Enero";
    break;
  case 1:
    month = "Febrero";
    break;
  case 2:
    month = "Marzo";
    break;
  case 3:
    month = "Abril";
    break;
  case 4:
    month = "Mayo";
    break;
  case 5:
    month = "Junio";
    break;
  case 6:
    month = "Julio";
    break;
  case 7:
    month = "Agosto";
    break;
  case 8:
    month = "Septiembre";
    break;
  case 9:
    month = "Octubre";
    break;
  case 10:
    month = "Noviembre";
    break;
  case 11:
    month = "Diciembre";
    break;
}

console.log(month);

// * Timers

const saludar = () => {
  console.info("Hola");
};

// ? Timeout:
// setTimeout(() => {code}, delay-in-miliseconds) -> Hace que se ejecute la función después del delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

// Si la función es externa:
button.addEventListener("click", () => {
  setTimeout(saludar, 3000);
});

// Si la función es interna:
button.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Adiós");
  }, 6000);
});

// Para parar:
button.addEventListener("click", () => {
  const timeout = setTimeout(saludar, 3000);
  clearTimeout(timeout);
}); //! no funciona porque esta declarado arriba, pero esta es la forma de hacerlo
// ? Para frenar un timeOut se puede hacer a la inversa del ejemplo y poner el paro en un botón, y al hacer click en el botón se cancele el timeOut.

// ? Interval:
// setInterval(() => {code}, interval-in-miliseconds) -> Hace que se ejecute la función cada intervalo en milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)

let count = 0;
// const interval = setInterval(() => {
//   document.write(`${count++} <br />`);
// }, 1000);

// setInterval(saludar, 1000);

const interval = setInterval(() => {
  console.log(count);
  count++;
}, 1000);

// Para parar:
button.addEventListener("click", () => {
  clearInterval(interval);
});
