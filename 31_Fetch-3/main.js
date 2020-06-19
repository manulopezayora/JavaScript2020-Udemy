// ! Fetch API

// * DOM
const buttonImg = document.getElementById("button-img");
const buttonPdf = document.getElementById("button-pdf");

buttonImg.addEventListener("click", () => {
  fetch("./threeDinos.jpg")
    // blob() -> Binary Long Object
    .then((res) => res.blob())
    .then((img) => {
      // Objeto nativo URL -> si le pasamos un objeto blob lo convierte en un link
      document.getElementById("img").src = URL.createObjectURL(img);
    });
});

buttonPdf.addEventListener("click", () => {
  fetch("./Archivo.pdf")
    // blob() -> Binary Long Object
    .then((res) => res.blob())
    .then((pdf) => {
      // Objeto nativo URL -> si le pasamos un objeto blob lo convierte en un link
      document.getElementById("pdf").href = URL.createObjectURL(pdf);
    });
});
