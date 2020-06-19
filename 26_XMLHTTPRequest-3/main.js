/*
 ! Ajax -> XMLHTTPRequest III
 ? Traer datos por petición AJAX a través de MySQL por POST
*/

// * DOM
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendData(form);
});

const sendData = (data) => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  // Abriendo la conexión
  xhr.open("POST", "marvel.php");

  //* Objeto formData
  const formData = new FormData(data);

  // Enviando la conexión
  xhr.send(formData);
};
