const gallery = document.getElementById("gallery");

//* Accediendo a los hijos
gallery.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  e.target.classList.add("teal");
});
