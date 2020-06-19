/*
! Drag & Drop - API File
*/

//* DOM
const fileInput = document.getElementById("file");
const dropZone = document.getElementById("drop-zone");

// Con el metodo click() simula hacer click en el elemento
dropZone.addEventListener("click", () => fileInput.click());

// Saber cuando estamos sobre la zona de drop
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("drop-zone--active");
});

// Saber cuando sale de la zona de drop
dropZone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropZone.classList.remove("drop-zone--active");
});

// Al soltar la imagen, esta se carga en el formulario
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  console.log(e.dataTransfer);
});

// Detalle para saber qué está pasando
fileInput.addEventListener("change", (e) => {
  console.log(fileInput.files);
});
