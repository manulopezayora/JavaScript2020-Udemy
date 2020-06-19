// ! Librería AXIOS -> GET
// https://github.com/axios/axios

/*
 * Si el proyecto solo va a hacer peticiones a una API REST para traer datos y ese es el único objetivo de las peticiones, es recomendable usar AXIOS.
 * Pesa muy poco y esta optimizada para eso. Tarda muy poco en hacer las peticiones.
 *
 * El CDN esta en el index.html
 */

const button = document.getElementById("button");

button.addEventListener("click", () => {
  // LLamamos a la libreria AXIOS() es un método y recibe un objeto.
  axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  })
    .then((res) => {
      const list = document.getElementById("list");
      const fragment = document.createDocumentFragment();

      for (userInfo of res.data) {
        const listItem = document.createElement("LI");
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragment.append(listItem);
      }
      list.append(fragment);
    })
    .catch((err) => console.log(err));
});
