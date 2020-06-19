/*
! API File
* Progress Bar
*/

//* DOM
const fileInput = document.getElementById("file");
const progress = document.getElementById("progress");

/*
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  //* El evento para controlar la subida de archivos es progress
  fileReader.addEventListener("progress", (e) => {
    //* console.log(e); -> buscar loaded y total para hacer regla de 3.
    // console.log(e.loaded);
    // console.log(e.total);
    //* Operación para sacar el porcentaje:
    //* e.loaded * 100) / e.total

    //? Al ser dinámico hay que darle estilos en línea.
    progress.style.width = Number.parseInt((e.loaded * 100) / e.total) + "%";
  });

  //* Para saber cuando esta cargado del todo el evento es loadend
  fileReader.addEventListener("loadend", (e) => {
    progress.style.width = "100%";
  });
});
*/

// * Solo con un elemento en el html. Hay que modificar CSS (crear una variable y load-bar:after)

// * Acceso a las variables de CSS
const root = document.documentElement;
// Con esto capturamos la raíz del archivo

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  //* El evento para controlar la subida de archivos es progress
  fileReader.addEventListener("progress", (e) => {
    // Modificar las variables de CSS
    root.style.setProperty(
      "--bar-width",
      Number.parseInt((e.loaded * 100) / e.total) + "%"
    );
  });

  //* Para saber cuando esta cargado del todo el evento es loadend
  fileReader.addEventListener("loadend", (e) => {
    root.style.setProperty("--bar-width", "100%");
  });
});
