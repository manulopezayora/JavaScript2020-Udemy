// Clases

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
  }
  saludar() {
    // return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    return this.datos;
  }
}

// Instanciar el objeto
const usuario = new Persona("Manuel", "López", 34);

console.log(usuario.saludar());
