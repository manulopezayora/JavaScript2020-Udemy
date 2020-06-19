/*
! API -> Drag & Drop II

pendingTasks.addEventListener("dragstart", (e) => {
*  dataTransfer
*    setData("type", "value"): Establece la información que queremos compartir.
*    getData("format"): Establece la información que queremos obtener.
  e.dataTransfer.setData("text/plain", e.target.id);
  console.log(e.dataTransfer); //? En el objeto que devuelve -> DataTransfer/items
  console.log(e.dataTransfer.getData("text")); //? Ahora esta la información
});

! Ejercicio:
? Completar la práctica quiada para que una vez esten las tareas en finalizadas se puedan volver a poner en tareas pendientes.
*/

//* DOM
const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");

//* Pending-Tasks to Finished-Tasks
pendingTasks.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.getData("text");
});

pendingTasks.addEventListener("drag", (e) => {
  e.target.classList.add("active");
});

pendingTasks.addEventListener("dragend", (e) => {
  e.target.classList.remove("active");
});

finishedTasks.addEventListener("dragover", (e) => {
  e.preventDefault();
});

finishedTasks.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("active");
  finishedTasks.append(pendingTasks.removeChild(element)); // con esta línea al remover el elemento lo añadimos a finishedTasks gracias al append
});

//* Finished-Tasks to Pending-Tasks
finishedTasks.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.getData("text");
});

finishedTasks.addEventListener("drag", (e) => {
  e.target.classList.add("active");
});

finishedTasks.addEventListener("dragend", (e) => {
  e.target.classList.remove("active");
});

pendingTasks.addEventListener("dragover", (e) => {
  e.preventDefault();
});

pendingTasks.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  element.classList.remove("active");
  pendingTasks.append(finishedTasks.removeChild(element)); // con esta línea al remover el elemento lo añadimos a finishedTasks gracias al append
});
