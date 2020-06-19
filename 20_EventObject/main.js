/*
 ! Objeto Evento

 */

const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");

input.addEventListener("keyup", (e) => {
  console.log(e);
});

button.addEventListener("click", (e) => {
  console.log(e.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //* Hace que el evento no se comporte de manera predeterminada.
  console.log("El formulario se ha enviado");
});

// form.submit(); //! Forzando a que ocurra sin hacer nada.

const link = document.getElementById("link");

//? en este caso con el link estamos haciendo que no deje ir al enlace.
link.addEventListener("click", (e) => {
  e.preventDefault();
  button.click(); // Al hacer click en el enlace se dispara el evento del button
});

//* En el tema de formularios es muy importante conocer e.preventDefault()

//* Se pueden disparar eventos como si fuesen funciones e incluso dentro de otros eventos. button.click()
