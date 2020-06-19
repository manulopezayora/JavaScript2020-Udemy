// Arrays

// Declaración de array y su indice con los valores

let array = [0, 1, 2, 3, 4, 5]; // Estos valores representan el índice
console.log(array);
console.log(array[0]);

//             0    1   2   3   4
let numeros = [27, 69, 30, 105, 47];
console.log(numeros[3]); // 105
console.log(numeros[2] + numeros[4]); // 30 + 47 = 77

let palabras = ["Hola ", "Manuel", "Carlos", "Lourdes"];
console.log(palabras[0] + palabras[1]); // Hola Manuel
console.log(palabras[0] + palabras[3]); // Hola Lourdes

console.info(`El nombre ${palabras[1]} tiene ${palabras[1].length} letras.`);

let numbers = [1, 2, 3, 4, 5];
let number = 5;

// Propiedades
console.log(numbers.length); // Devuelve la cantidad de valores que tiene

// Métodos

// Evaluar si es un array
console.log(Array.isArray(number)); // False, no es un array
console.log(Array.isArray(numbers)); // True

// Eliminar elementos
console.log(numbers);
numbers.shift(); // Elimina el primer elemento del array
console.log(numbers);
numbers.pop(); // Elimina el último elemento del array
console.log(numbers);

numbers = [1, 2, 3, 4, 5]; // Vuelvo a dejar el array en su posicion inicial. Si los ejemplos se hacen dentro del console.log() no se guardaria el valor nuevo del array fuera del console.log()

let deletedElement = numbers.shift(); // Guarda en una variable el elemento que se elimina del array
console.log(deletedElement); // 1

// Añadir elementos al Array
numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
numbers.push(27, 48);
console.log(numbers);

numbers.unshift(0); // Añade el número como primer elemento
console.log(numbers);

// Buscar el índice del elemento que coincida
console.log(numbers.indexOf(27)); // Indice 7

numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(27)); // -1 porque no lo encuentra en el array
console.log(numbers.indexOf(2)); // 1

// Con indexOf solo busca la primera coincidencia de izq a derecha. Si hubiera dos valores iguales solo nos devolvería la posicion del primero.

// Para buscar la última coincidencia se utiliza lastIndexOf()
numbers = [1, 2, 3, 4, 5, 1];
console.log(numbers.lastIndexOf(1)); // 5

numbers.pop();
console.log(numbers.reverse()); // DEvuelve el contenido del array del revés

console.log(numbers.join()); //  Devuelve un string con el contenido del array. Si no pasamos parámetros lo separa con comas.
console.log(numbers.join(" "));
console.log(numbers.join(" -> "));

let arrayString = numbers.join(" - ");
console.log(arrayString);

// .splice(a, b, item); Cambia el contenido de un array eliminando elementos existentes y/o añadiendo nuevos elementos.
// a - Índice del inicio
// b - Números de elementos (opcional)
// items - Elementos a añadir en el caso de que se añadan. (opcional)
numbers = [1, 2, 3, 4, 5];

console.log(numbers);

numbers.splice(3);
console.log(numbers); // 1, 2, 3

// Podemos guardar lo que sobra en una variable como en los ejemplos anteriores.

numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // Elimina e de la posición 2 y el siguiente elemento.(2 elementos)
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2, 10);
console.log(numbers); // Elimina los elementos y ademas añade el item en la posición de los eliminados. Si de segundo parámetro pasamos un 0, no eliminaria ningún elemento del array

numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(); // Copia el array
console.log(newNumbers);

numbers = [1, 2, 3, 4, 5];
let newNumbers2 = numbers.slice(2); // Devuelve un array desde el elemento pasado por parámetro
console.log(newNumbers2);

numbers = [1, 2, 3, 4, 5];
let newNumbers3 = numbers.slice(1, 4); // Devuelve un array desde el elemento pasado por parámetro hasta el segundo parámetro
console.log(newNumbers3);
