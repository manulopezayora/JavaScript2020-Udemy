/*
 ! Ajax -> XMLHTTPRequest II
 ? Traer datos por petición AJAX a través de MySQL.
*/

// * DOM
const form = document.getElementById("form");
const characters = document.getElementById("characters");
const table = document.getElementById("table");

//? Función para recibir los datos:
const getData = (id) => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  //? Preguntar si (id) existe para saber si estamos cargando por primera vez la página o no:

  // Si es undefined estamos cargando la página por primera vez y no hemos pulsado en el botón para consultar los datos.
  if (id == undefined) {
    // Establecer la petición
    xhr.open("GET", "./marvel.php");

    // Escuchar la respuesta para saber que tenemos los datos
    xhr.addEventListener("load", (data) => {
      // Convertir los datos a JSON
      const dataJSON = JSON.parse(data.target.response);
      // console.log(dataJSON);

      // Rellenar el select
      const fragment = document.createDocumentFragment();

      // Bucle para generar el codigo del select
      for (const heroe of dataJSON) {
        const option = document.createElement("OPTION");
        // ID en mayúsculas porque esta así en la base de datos
        option.setAttribute("value", heroe.ID);
        option.textContent = heroe.Name;

        // Meter todo en el fragmento
        fragment.append(option);
      }

      // Metemos el fragmento en el select
      characters.append(fragment);
    });

    // Rellenar los datos de la tabla si id != undefined (hemos pulsado en el botón)
  } else {
    // Establecer la petición por GET (?=id -> La variable id aun no existe, pero pasara por parámetro con la función getData(id))
    xhr.open("GET", `./marvel.php?id=${id}`);

    // Escuchar la respuesta para saber que tenemos los datos
    xhr.addEventListener("load", (data) => {
      // Convertir los datos a JSON
      const dataJSON = JSON.parse(data.target.response);
      // console.log(dataJSON);

      // Rellenar la tabla
      const fragment = document.createDocumentFragment();

      // Bucle para generar el codigo de la tabla
      for (const heroe of dataJSON) {
        // Crear elementos de la tabla
        const row = document.createElement("TR");
        const dataName = document.createElement("TD");
        const dataAlignment = document.createElement("TD");
        const dataHometown = document.createElement("TD");
        const dataGender = document.createElement("TD");
        const dataFighting = document.createElement("TD");

        // Rellenar los elementos
        dataName.textContent = heroe.Name;
        dataAlignment.textContent = heroe.Alignment;
        dataHometown.textContent = heroe.Hometown;
        dataGender.textContent = heroe.Gender;
        dataFighting.textContent = heroe.Fighting_Skills;

        // Añadir los TD al TR (los datos a la fila)
        row.append(dataName);
        row.append(dataAlignment);
        row.append(dataHometown);
        row.append(dataGender);
        row.append(dataFighting);

        // Meter todo en el fragmento
        fragment.append(row);
      }

      //! Si queremos borrar el resultado anterior y dejar la ultima consulta
      // Preguntar si existe el hijo
      if (table.children[1]) table.removeChild(table.children[1]); // 0 es el título

      // Metemos el fragmento en la tabla
      table.append(fragment);
    });
  }

  // Envio del objeto
  xhr.send();
};

// Se llama a la función para que se carge el select
getData();

// Añadir al formulario el evento de enviado.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // * Seleccionar el valor del select. .children[] devuelve los hijos del select.
  // * selectedIndex devuelve el indice del option dentro del select (0,1,2,3...n)
  // * .value devuelve el valor del value="" del option
  getData(characters.children[characters.selectedIndex].value);
  // ? Llamamos a la función y le pasamos el valor del id por parámetro getData(id)
});
