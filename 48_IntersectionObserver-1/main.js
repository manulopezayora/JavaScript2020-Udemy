/*
! Intersection Observer
*/

//* DOM
const boxes = document.querySelectorAll(".box");

const callback = (entries) => {
  // Recibe como parámetros los elementos que tiene que vigilar. Suelen llamarse entries.
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
    }
  });
};

const options = {
  // root:
  // rootMargin: "100px"
  //? Funciona igual que en CSS y admite 4 parámetros (uno por lado) o 1 parámetro (los 4 lados). Al darle valor (positivo o negativo) afecta al intersection Observer para que lo detecte antes (valor positivo) o despues (valor negativo)
  threshold: 0.25,
  //? : 0  -> Valor por defecto
  //? : 0.25  -> Intercepta el 25% de la caja
  //? : 1 -> Valor máximo. Intercepta cuando a entrado el ancho completo de la caja.
};

//* Creando el Intersection Observer
// Elemento constructor -> new intersectionObserver(func, [optional param])
// La función del parámetro se ejecuta al dispararse el evento
const observer = new IntersectionObserver(callback, options);
boxes.forEach((element) => observer.observe(element));
