/*
 ! DOM - Atributos y Clases

 * Atributos:
 ? element.getAttribute("attribute")
 ? element.setAttribute("attribute", value)


 * Clases:
 ? element.classList.add("class", "class", ...)
 ? element.classList.remove("class", "class", ...)
 ? element.classList.toggle("class", [force]) -> Se verá en eventos
 ? element.classList.contains("class")
 ? element.classList.replace("oldClass", "newClass")

 * Atributos directos
   Son los que se pueden acceder de forma directa. Cuando muestras el elemento por consola, los que no tienen desplegable.
 ? id
 ? value

 */

const title = document.getElementById("title");
const name = document.getElementById("name");

// * Atributos
// console.log(name.getAttribute("type"));
// name.setAttribute("type", "date");

// * Clases
title.classList.add("main-title", "other-title"); // Añade la clase
title.classList.remove("other-title"); // Elimina la clase

// Comprueba la clase
if (title.classList.contains("title")) console.log("Tiene la clase title");
else console.log("No tiene la clase title");

// Reemplaza una clase por otra.
title.classList.replace("title", "titulo");

console.log(title);
console.log(name);

console.log(title.id);
console.log(title.innerHTML);
console.log(title.textContent);

console.log(name.value);
