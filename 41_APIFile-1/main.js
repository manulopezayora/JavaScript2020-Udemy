/*
! API File

* Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto dataTransfer de la API Drag & Drop.

* La interfaz más utilizada para interactuar con ella es fileReader
? https://developer.mozilla.org/es/docs/Web/API/FileReader

* Métodos:
- FileReader.readAsText(): Comienza la lectura del contenido del objeto Blob, una vez terminada, el atributo result contiene el contenido del fichero como una cadena de texto.

- FileReader.readAsDataURL(): Comienza la lectura del contenido del objeto Blob, una vez terminada, el atributo result contiene un data: URL que representa los datos del fichero.

- Hay más métodos en la documentación.

*/

//* DOM
const fileInput = document.getElementById("file");
const text = document.getElementById("text");
const img = document.getElementById("img");

/* //! Leer archivos de texto
* Para saber si hemos cargado el archivo se utiliza el evento change
fileInput.addEventListener("change", (e) => {
  * Si hacemos console.log del evento podemos ver el array files que nos muestra toda la informacion del evento. El tipo de archivo, el peso, si son varios archivos...
  * console.log(e.target.files);

  * Acceder al archivo subido:
  const file = e.target.files[0];
  const fileReader = new FileReader();

  fileReader.readAsText(file);
  * Al ser asincrono hay que añadir un evento para saber cuando ha terminado

  fileReader.addEventListener("load", (e) => {
    * console.log(e.target.result);
    * Añadirlo al párrafo
    text.textContent = e.target.result;
  });
});
*/

/*
* Leer archivos de imagen (solo 1)
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();

  fileReader.readAsDataURL(file);

  fileReader.addEventListener("load", (e) => {
    img.setAttribute("src", e.target.result);
  });
});
*/

//* Leer archivos de imagen (varias) -> atributo multiple en etiqueta input (html)
//* Crear la etiqueta img con un bucle porque no sabemos las fotos que se van a subir.
const images = document.getElementById("images");

fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  const fragment = document.createDocumentFragment();

  for (const file of files) {
    const fileReader = new FileReader(); //! Siempre dentro del bucle
    const img = document.createElement("IMG");

    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      img.setAttribute("src", e.target.result);
    });
    fragment.append(img);
  }
  images.append(fragment);
});
