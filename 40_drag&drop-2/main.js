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
*/

//* DOM
const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");

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
