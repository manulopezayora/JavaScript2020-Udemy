/*

* - Crea una clase libro
* - La clase libro tendrá titulo, autor, año y género
* - Crea un método que devuelva toda la información del libro
* - Pide 3 libros y guardalos en un array
* - Los libros se introducirám al arrancar el programa pidiendo los datos por prompt
* - Validar que los campos no se introduzcan vacíos
* - Validar que el año sea un número y tenga 4 dígitos
* - Validar que el género sea: aventuras, terror o fantasía
* - Crea una función que muestre todos los libros
* - Crea una función que muestre los autores ordenados alfabéticamente
* - Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando el método que devuelve la información

*/

class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }
  BookInfo() {
    return `${this.title} es un libro de ${this.gender} del año ${this.year} y el autor es ${this.author}`;
  }
  getAuthor() {
    return this.author;
  }
  getGender() {
    return this.gender;
  }
}

let books = [];

//? En este ejemplo es mejor utilizar while en vez de un for.
//! En el caso del for, si una entrada es erronea habria que decrementar la variable contador. (i--)

while (books.length < 3) {
  let title = prompt("Escribe el título del libro");
  let author = prompt("Escribe el autor del libro");
  let year = prompt("Escribe el año del libro");
  let gender = prompt("Escribe el género del libro").toLowerCase();

  //* Validaciones:
  if (
    title != "" &&
    author != "" &&
    !isNaN(year) &&
    year.length == 4 &&
    (gender == "aventura" || gender == "terror" || gender == "fantasía")
  ) {
    books.push(new Book(title, author, year, gender));
  }
}

//? - Crea una función que muestre todos los libros
const showAllBooks = () => console.info(books);

//? - Crea una función que muestre los autores ordenados alfabéticamente
const showAuthors = () => {
  let authors = [];

  for (const book of books) {
    authors.push(book.getAuthor());
  }

  console.log(authors.sort());
};

//? - Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando el método que devuelve la información:
const showGender = () => {
  const gender = prompt("Escribe un género");
  for (const book of books) {
    if (book.getGender() == gender) {
      console.log(book.BookInfo());
    }
  }
};

showAllBooks();
showAuthors();
showGender();
