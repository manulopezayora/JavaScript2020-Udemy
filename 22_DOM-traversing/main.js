/*
 ! DOM - Traversing -> Reccorer el DOM

 * Padre - parent (Nodo del que desciende)

        - parentNode -> Devuelve el nodo padre (que puede no ser un elemento).

        - parentElement -> Devuelve el nodo del elemento padre.

        Nota: 
        Los nodos del tipo document y documentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.

 * Hijos - child (Nodo que desciende de un padre)

        - childNodes -> Devuelve todos los nodos hijos.
        - children -> Devuelve todos los nodos elementos hijos.
        - firstChild -> Devuelve el primer nodo hijo.
        - firstElementChild -> Devuelve el primer nodo elemento hijo.
        - lastChild -> Devuelve el último nodo hijo.
        - lastElementChild -> Devuelve el último nodo elemento hijo.
        - hasChildNodes() -> Devuelve true si el nodo tiene hijos y false si no los tiene.

 * Hermanos - siblings (Nodo al mismo nivel)
        - nextSibling -> Devuelve el siguiente nodo hermano.
        - nextElementSibling 
        - previousSibling
        - previousElementSibling

 * Cercano
        - closest(selector) -> Selecciona el nodo más cercano que cumplacon el selector, aún es experimental.

*/

const parent = document.getElementById("parent");

// ? parent
// console.log(parent.parentNode);
// console.log(parent.parentElement);
// console.log(parent.parentElement.parentElement); // Sube un nivel más.

// ? child
// console.log(parent.childNodes); // Con esta forma devuelve saltos de línea incluidos.
// console.log(parent.children); // Esta es la buena.
// console.log(parent.children[1]); // Esta es la buena.

console.log(parent.firstChild); // Si el código esta identado devuelve el salto de línea.
console.log(parent.firstElementChild); // Devuelve el elemento

console.log(parent.hasChildNodes()); // Devuelve TRUE porque tiene hijos

console.log(parent.nextElementSibling); // Devuelve null porque no tiene ningun elemento hermano.

console.log(parent.parentElement.nextElementSibling);
// Si buscamos en el padre de parent, sí devuelve al hermano siguiente.

console.log(parent.parentElement.previousElementSibling);
// Devuelve al hermano anterior.

console.log(parent.closest("#parent"));
// Devuelve el elemento que se pase por parámetro y que este por encima o al mismo nivel del parent (incluyendo él mismo), acepta elemento, clase o id
