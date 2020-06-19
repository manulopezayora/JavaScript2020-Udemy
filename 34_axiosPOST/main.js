// ! Librería AXIOS -> POST
// https://github.com/axios/axios

/*
 * Si el proyecto va a hacer inserciones a una API REST, es recomendable usar AXIOS.
 * Pesa muy poco y esta optimizada para eso. Tarda muy poco en hacer las peticiones.
 *
 * El CDN esta en el index.html
 */

const button = document.getElementById("button");

button.addEventListener("click", () => {
  // LLamamos a la libreria AXIOS() es un método y recibe un objeto.
  axios({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title: "It's a new post",
      body: "Este es el cuerpo del mensaje que voy a enviar",
      userId: 1,
    },
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
});
