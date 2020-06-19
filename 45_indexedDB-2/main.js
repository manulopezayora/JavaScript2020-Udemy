/*
! IndexedDB

- https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API/Conceptos_Basicos_Detras_De_IndexedDB

- https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API/Usando_IndexedDB

- https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API
*/

//* Almacenar el acceso a IndexedDB
// Si la constante se llama indexedDB hay que hacer referencia al window al declararla. Si es otro nombre no hace falta
//? const connDB = indexedDB
const indexedDB = window.indexedDB;

//* DOM
const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

//* Comprobar si el navegador soporta indexedDB
// Por precaución también preguntamos si existe form
if (indexedDB && form) {
  let db;

  // Acceder a la base de datos con el método open("nombre de base de datos", version en núm entero)
  const request = indexedDB.open("tasksLists", 1);

  //* Si todo va bien
  request.onsuccess = () => {
    db = request.result;
    console.log("OPEN:", db);

    //! Funcion Asíncrona
    readData();
  };

  //* Si necesita actualizarse o crearse
  request.onupgradeneeded = (e) => {
    db = e.target.result;
    console.log("Create::", db);

    const objectStore = db.createObjectStore("tasks", {
      //* Índice automático
      // autoIncrement: true,

      //* Índice con título
      keyPath: "taskTitle",
    });
  };

  //* Si da error
  request.onerror = (error) => {
    console.error("ERROR:", error);
  };

  const addData = (data) => {
    //* Crear transacción
    const transaction = db.transaction(["tasks"], "readwrite");
    // const transaction = db.transaction(["tasks", "readonly"]) Por defecto

    //* Abrir el almacen de datos:
    const objectStore = transaction.objectStore("tasks");

    //* Añadir los datos:
    const request = objectStore.add(data);

    //! Para que se actualicen los datos en la página cuando insertamos tareas
    readData();
  };

  //* Coger los datos que queremos actualizar y meterlos al formulario:
  const getData = (key) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.get(key); //! cambia
    //* En vez de añadir datos (add) vamos a obtener los datos (get)

    //! Esta función es prácticamente igual que la de addData

    //* Evaluar si ha terminado:
    request.onsuccess = () => {
      // Hacer que los valores a los que se hace referencia cambien:
      form.task.value = request.result.taskTitle;
      form.priority.value = request.result.taskPriority;

      form.button.dataset.action = "update"; // cambia el data-action
      form.button.textContent = "Update Task";
    };
  };

  const updateData = (data) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.put(data);
    //! igual que addData(data) pero cambia el método put(data)
    request.onsuccess = () => {
      form.button.dataset.action = "add"; // cambia el botón a add
      form.button.textContent = "Add Task";
    };
    readData();
  };

  const readData = () => {
    //* Crear transacción
    const transaction = db.transaction(["tasks"], "readonly");

    //* Abrir el almacen de datos:
    const objectStore = transaction.objectStore("tasks");

    //* Leer los datos:
    const request = objectStore.openCursor();
    // openCursor() crea un cursor para leer los datos

    //* FRagmento para meter la información
    const fragment = document.createDocumentFragment();

    request.onsuccess = (e) => {
      //! Esta función es asincrona, necesita leer la base de datos para poder ejecutarse. El lugar de llamar esta funcion no es fuera del evento, es despues de tener la base de datos abierta.

      //* Guardando el valor del cursor
      const cursor = e.target.result;
      if (cursor) {
        const taskTitle = document.createElement("P");
        taskTitle.textContent = cursor.value.taskTitle;
        fragment.append(taskTitle);

        const taskPriority = document.createElement("P");
        taskPriority.textContent = cursor.value.taskPriority;
        fragment.append(taskPriority);

        //* Botones de UPDATE y DELETE
        const taskUpdate = document.createElement("BUTTON");
        taskUpdate.classList.add("btn", "update");
        taskUpdate.dataset.type = "update";
        taskUpdate.dataset.key = cursor.key;
        taskUpdate.textContent = "Update";
        fragment.append(taskUpdate);

        const taskDelete = document.createElement("BUTTON");
        taskDelete.classList.add("btn", "delete");
        taskDelete.textContent = "Delete";
        fragment.append(taskDelete);

        //* De momento cursor solo lee una vez. Para que siga leyendo hay que darle el método continue()
        cursor.continue();
      } else {
        //* Entra aquí cuando no hay más datos que leer, entonces le decimos que imprima el fragmento en el div con el id: tasks
        //! Eliminamos la posible información que teniamos en el div para meter la nueva (Vuelve a leer todas las entradas de la base de datos y si hay algo las repite)
        tasks.textContent = "";
        tasks.append(fragment);
      }
    };
  };

  //* Poner el formulario a la escucha para saber cuando se envia.
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Objeto que vamos a enviar a la base de datos:
    const data = {
      //? e.target.TASK.value hace referencia al valor del input
      taskTitle: e.target.task.value,
      //? e.target.PRIORITY.value hace referencia al valor del select
      taskPriority: e.target.priority.value,
    };

    if (e.target.button.dataset.action == "add") {
      addData(data);
    } else if (e.target.button.dataset.action == "update") {
      updateData(data);
    }

    form.reset();
  });

  tasks.addEventListener("click", (e) => {
    if (e.target.dataset.type == "update") {
      getData(e.target.dataset.key);
    }
  });
}
