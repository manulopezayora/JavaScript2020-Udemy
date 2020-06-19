/*
 ! Eventos

 * Sintaxis:
 ? Element.addEventListener("event", callback)

 TODO: Hay más eventos. Buscar en la documentación.

* Eventos de Ratón:
? click -> click izq del ratón sobre el elemento.
? dblclick -> doble click izq del ratón sobre el elemento.
? mouseenter -> cuando el puntero entra en la zona del elemento.
? mouseleaver -> cuando el puntero sale de la zona del elemento.
? mousedown -> cuando pulsamos el botón izq.
? mouseup -> cuando soltamos el botón izq del ratón.
? mousemove -> cuando movemos el ratón

* Eventos del teclado:
? keydown -> cuando pulsamos una tecla.
? keyup -> cuando soltamos una tecla.
? keypress -> cuando pulsamos y no soltamos una tecla.

 */

const button = document.getElementById("button");
const box = document.getElementById("box");
const text = document.getElementById("text");

// button.addEventListener("click", () => {
//   console.log("Has hecho click!");
// });

// button.addEventListener("dblclick", () => {
//   console.log("Has hecho doble click!");
// });

box.addEventListener("mouseenter", () => {
  box.classList.replace("teal", "darkred");
});

box.addEventListener("mouseleave", () => {
  box.classList.replace("darkred", "teal");
});

box.addEventListener("mousedown", () => {
  console.log("Haces click en la caja!!");
});

box.addEventListener("mouseup", () => {
  console.log("Soltando el click!!");
});

box.addEventListener("mousemove", () => {
  console.log("Moviendo el raton sobre mí!");
});

text.addEventListener("keydown", () => {
  console.log("Has pulsado una tecla");
});

// ? La gracia es saber que tecla estamos pulsando. En la siguiente clase se verá el Objeto Evento.
