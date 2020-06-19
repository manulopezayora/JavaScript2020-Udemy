// ! Fetch API

/*
* Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.

* También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recurso de forma asíncronapor la red.

* Esta basados en promesas, por lo cual tienen un response y un reject internos

? Response tiene varios métodos:
- arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
- blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente.
- clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
- formData(): Se utiliza para leer los objetos formData.
- json(): Convierte los archivos JSON en un objeto JavaScript.
- text(): Se utiliza ccuando queremos leer un archivo de texto. Siempre se codifica en UTF-8.


* Saber si el navegador soporta fetch()
  if (window.fetch != undefined) console.log("Fetch OK");
  else console.warn("Fetch is not working");
*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
  // Si le pasamos una url, fecth trabaja automáticamente con GET
  fetch("https://jsonplaceholder.typicode.com/users") // Importante comprobar en el objeto si el stado y el ok es correcto.
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res))) // Fetch es una promesa
    .then((res) => res.json()) // convierte el objeto a json y devuelve un objeto array
    // .then((res) => console.log(res)) -> muestra el objeto

    // * Montar la información en una lista.
    .then((res) => {
      const list = document.getElementById("list");
      const fragment = document.createDocumentFragment();

      for (const userInfo of res) {
        const listItem = document.createElement("LI");
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragment.append(listItem);
      }

      list.append(fragment);
    });
});
