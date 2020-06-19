/*
 ! Ajax -> XMLHTTPRequest I

 ? Material complementario para consultar
 - Protocolo HTTP 
 https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

 - Códigos de estado de respuesta HTTP:
 https://developer.mozilla.org/es/docs/Web/HTTP/Status

 ? Base de datos JSON para utilizar con Ajax
 https://jsonplaceholder.typicode.com/
*/

//* DOM
const button = document.getElementById("button");
const list = document.getElementById("list");

//* Capturar el evento del click y lanzar la petición del evento AJAX
button.addEventListener("click", () => {
  // Se llama así por convención
  let xhr;

  // comprobando que el navegador soporta la petición AJAX
  // Navegadores actuales
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");
  // Navegadores antiguos. Anterior a IE 10

  //? Método open() -> GET: a través de la url, POST: necesario crear un objeto donde guardar la información.

  // Para el ejemplo se usara GET porque la página espera la petición por GET.

  //* Abriendo la conexión
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //* Que tiene que hacer con los datos

  // El evento se dispara cuando llega la información al objeto. Se guarda en una variable (data)
  xhr.addEventListener("load", (data) => {
    // La información llega como string. JSON.parse() lo pasa a JSON
    const dataJSON = JSON.parse(data.target.response);

    for (const userInfo of dataJSON) {
      const listItem = document.createElement("LI");
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      list.appendChild(listItem);
    }
  });

  //* Enviando la conexión
  xhr.send();
});
