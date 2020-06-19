// ! Fetch API

/*
* POST:
? Para hacer peticiones POST, fetch() admite un segundo parámetro.

    fetch(url, {
      method: "POST",
      body: Datos que enviemos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
      headers: {
        cabeceras de información sobre lo que estamos enviando
        https://developer.mozilla.org/es/docs/Web/HTTP/Headers
      }
    })
*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
  // Objeto en JSON
  const newPost = {
    title: "It's a new post",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    userId: 1,
  };

  // Petición Fetch()
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
