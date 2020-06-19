/*
 ! DOM - Insertar y eliminar elementos II

 * parent.insertBefore(newElement, referenceElement)
 ? Inserta un elemento antes del elemento0 de referencia

   SOPORTE TOTAL
 * parent.insertAdjacentElement(position, element)
 * parent.insertAdjacentHTML(position, HTML)
 * parent.insertAdjacentText(position, text)
 
   Positions:
   - beforebegin -> Antes de que empiece (hermano anterior)
   - afterbegin -> Despues de que empiece (primer hijo)
   - beforeend -> Antes de que acabe (último hijo)
   - afterend -> Después de que acabe (hermano siguiente)

 * parent.replaceChild(newChild, oldChild)


 ! DOM manipulation convenience methods -> jQuery like
 https://caniuse.com/#search=jQuery-like

  Positions:
  - parent.before() -> Antes de que empiece (hermano anterior).
  - parent.prepend() -> Después de que empiece (primer hijo)
  - parent.append() -> Antes de que acabe (Último hijo)
  - parent.after() -> Después de que acabe (hermano siguiente)

  child.replaceWith(newChild)


 ! Clonar y eliminar elementos
 
 * element.cloneNode(true|false)
 ? Clona el nodo. 
 - Si le pasamos true, clona todo el elemento con los hijos. 
 - Si le pasamos false, clona solo el elemento sin hijos.

 * element.remove()
 ? Elimina el nodo del DOM.
 
 * element.removeChild(child)
 ? Elimina el nodo hijo del DOM.

*/

const list = document.getElementById("list");

const newElement = document.createElement("LI");
newElement.textContent = "I'm a new element";

const paragraph = document.createElement("P");
paragraph.textContent =
  "Este es el texto del párrafo que ira despues de la lista.";

//? appendChild() siempre lo coloca al final.
// list.appendChild(newElement);

//* Así se inserta en la posición específica
// list.insertBefore(newElement, list.children[0]);

//* Otra forma
// list.insertAdjacentElement("beforebegin", newElement); // se crea como hermano de list. Se crea fuera de la lista. Un nivel pòr encima.

//* Las dos son iguales
// list.children[0].insertAdjacentElement("beforebegin", newElement);
// list.insertAdjacentElement("afterbegin", newElement);

//* Al final del elemento padre
// list.insertAdjacentElement("beforeend", newElement);

//* Después del elemento padre.
// list.insertAdjacentElement("afterend", paragraph);

//* O despues de un elemento en concreto. Por ejemplo después del primer elemento de la lista:
// list.children[0].insertAdjacentElement("afterend", newElement);

//* Reemplazar elementos hijos
// list.replaceChild(newElement, list.children[1]);

// ! Métodos nuevos extraidos de jQuery
// ? Se recomienda usar éstos

//? Hacen lo mismo que los anteriores
//* Antes de que empiece (hermano anterior).
// list.before(paragraph);

//* Después de que empiece (primer hijo)
// list.prepend(newElement);

//* Antes de que acabe (Último hijo)
// list.append(newElement);

//* Después de que acabe (hermano siguiente)
// list.after(paragraph);

//* Reemplazar
// list.children[0].replaceWith(newElement);
//? No hace falta que sea un hijo de algo. Podemos seleccionar directamente el elemento.
// document.getElementById(element).replaceWith(newElement);
// element.replaceWith(newElement);

// ! Clonar y eliminar elementos.

//* Clonar elementos
// list.after(list.cloneNode(true));

//* Eliminar elementos
// list.remove();
// list.removeChild(list.children[0]);
