/*
 * Document Object Model - DOM
 * No es JavaScript, es una API (Aplication Programming Interface) y se usa a través de JavaScript


 ? Con el inspector del navegador: Si seleccionamos el elemento en la pestaña del inspector y despues vamos a la consola y metemos $0 nos aparece todo el contenido de la etiqueta.
 Podemos tratarlo como un objeto: 
    $0.id -> nos aparece el id del elemento
    $0.className -> nos aparece la clase del elemento
    $0.textContent -> nos aparece el contenido del elemento
    $0.nodeType -> muestra el numero de nodo
    ...
 */

// ! -> Los elementos siempre se guardan en constantes.

// * document.getElementById("id") -> Acceder a un elemento a través de su id.

const title = document.getElementById("title");
let name = "Manuel";
title.textContent = `Bienvenido ${name}`;

// * document.querySelector("selectorCSS") o elemento.querySelector("selectorCSS") -> Accede al primer elemento que coincida con el selector CSS

const paragraph = section.querySelector(".paragraph");
//const paragraph = document.querySelector(".paragraph");
//document.querySelector(".paragraph.nth-child(2)");
// ? El parámetro tiene que ser un selector CSS.
// ? Pueden ser pseudoclases  pero NO pseudoelementos

console.log(paragraph);

// * document.querySelectorAll("selectorCSS") -> Accede al todos los elemento que coincidan con el selector CSS, devuelve un nodeList

const paragraphs = document.querySelectorAll(".paragraph");
console.log(paragraphs); // Devuelve un nodeList que no es un array

const paragraphsSpread = [...document.querySelectorAll(".paragraph")];
console.log(paragraphsSpread); // Con el spread operator si devuelve un array pero no tiene soporte TOTAL.

const paragraphsArray = Array.from(document.querySelectorAll(".paragraph"));
console.log(paragraphsArray); // Devuelve un array

paragraphsArray.map((p) => (p.style.color = "teal"));
