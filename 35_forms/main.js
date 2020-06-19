// * DOM
const form = document.getElementById("form");
const button = document.getElementById("button");

const name = document.getElementById("name");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const terms = document.getElementById("terms");

// ? Validar mediante un objeto:
// El objeto tiene las propiedades en false y las pasaremos a true cuando el usuario introduzca los campos
const formIsValid = {
  name: false,
  email: false,
  gender: false,
  terms: false,
};

// Bloquear el formulario para que no se envie
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

// change registra cualquier evento siempre que el valor del campo cambie. Si usamos keyup funciona pero si el usuario hace un copia y pega con el ratón no se registra el evento.
name.addEventListener("change", (e) => {
  if (e.target.value.trim().length > 0) formIsValid.name = true;
});

email.addEventListener("change", (e) => {
  if (e.target.value.trim().length > 0) formIsValid.email = true;
});

gender.addEventListener("change", (e) => {
  if (e.target.checked == true) formIsValid.gender = true;
});

terms.addEventListener("change", (e) => {
  formIsValid.terms = e.target.checked;
  // Así cojemos el valor del checkbox.

  e.target.checked
    ? button.removeAttribute("disabled")
    : button.setAttribute("disabled", true);
});

const validateForm = () => {
  // Object.values() devuelve un array con el valor de los datos. Object.key() devuelve el nombre.
  const formValues = Object.values(formIsValid);

  // Se comprueba si en el array existe algún false.
  const valid = formValues.findIndex((value) => value == false); // Si encuentra el valor nos devuelve el index.
  // Si no encuentra ningun false nos devuelve un -1. Con submit() se enviará el formulario.
  if (valid == -1) form.submit();
  else alert("Form Invalid");
};
