/*
 ! Crear e insertar elementos en JavaScript

 * Crear un elemento: document.createElement(element)
 * Escribir texto en un elemento: element.textContent = texto
 * Escribir HTML en un elemento: element.innerHTML = código HTML

 * Añadir un elemento al DOM: parent.appendChild(element)

 * Fragmentos de código: document.createDocumentFragment()

*/

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

// * DOM
const title = document.getElementById("title");
const dayList = document.getElementById("dayList");
const selectDay = document.getElementById("selectDay");

// TODO: Insertar etiqueta <span> en el título
// title.textContent = "DOM - <span> Crear e Insertar elementos I </span>"; //! No lo inserta, lo escribe como contenido de texto

title.innerHTML = "DOM - <span> Crear e Insertar elementos I </span>"; //* Esta es la forma correcta.

//? Esa es la principal diferencia entre innerHTML y textContent.

// TODO: Creando un elemento de lista
/*
* Por convención se pone el elemento en mayúsculas
? const itemList = document.createElement("LI");

* Añadiendole contenido
? itemList.textContent = "Lunes";

* Añadiendo el elemento a la lista
? dayList.appendChild(itemList);
*/

// * Insertar todos los dias de la semana en la lista

// ! Esta forma es solo un ejemplo de como NO se hace.
// ? El dódigo que hay a continuación lo que hace es recargar el numero de nodos a cada vuelta del bucle consumiendo demasiados recursos del navegador. Funciona pero no es la manera óptima de hacerlo.

// !    for (const day of days) {
// !      dayList.innerHTML += `<li>${day}</li>`;
// !    }

// * La forma correcta de hacerlo seria esta:
const fragment = document.createDocumentFragment();
for (const day of days) {
  const itemList = document.createElement("LI");
  itemList.textContent = day;
  fragment.appendChild(itemList);
}
//? La constante fragment tiene todo el código que necesitamos para montar la lista.

dayList.appendChild(fragment);

// TODO: Ejercicio. Rellenar el select con los días de la semana.

const selectTemplate = document.createDocumentFragment();

for (const day of days) {
  const optionsSelect = document.createElement("OPTION");
  // * Añadir el atributo value="día"
  optionsSelect.setAttribute("value", day.toLowerCase());
  optionsSelect.textContent = day;
  selectTemplate.appendChild(optionsSelect);
}

selectDay.appendChild(selectTemplate);
