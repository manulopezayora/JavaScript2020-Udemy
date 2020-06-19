/*
! Match Media

https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

mql = window.matchMedia(mediaQueryString)

- mql viene de mMedia Query List, que es el objeto que se crea con el método matchMedia()
- mediaQueryString es cualquier media query válida en CSS

*/

const mql = matchMedia("(min-width: 400px) and (orientation: landscape)");

const applyMatchMedia = (mql) => {
  //! Son estilos rapidos para ver el ejemplo.
  mql.matches
    ? (document.body.style.backgroundColor = "red")
    : (document.body.style.backgroundColor = "royalblue");
};

addEventListener("resize", (e) => applyMatchMedia(mql));

// Asi se ejecuta siempre al cargar la página y obvia los estilos CSS
addEventListener("DOMContentLoaded", (e) => applyMatchMedia(mql));

//! Esto NO sustituye las mediaquerys de CSS. Sirve para cuando necesitamos aplicarlas a la lógica de JavaScript.

//* Ejemplo de uso: En cierto tipo de ancho se necesita añadir o remover clases a elementos.
