/*

9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

*/

let word = prompt("Escribe una palabra").toLowerCase();
let vocals = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "ü"];
let numberCons = 0;
let cons = [];
let numberVocals = 0;
let voc = [];

for (i = 0; i < word.length; i++) {
  if (vocals.includes(word[i])) {
    numberVocals++;
    voc.push(word[i]);
  } else {
    numberCons++;
    cons.push(word[i]);
  }
}

console.log(`La palabra ${word} tiene ${numberVocals} vocales`);
console.log(voc);
console.log(`La palabra ${word} tiene ${numberCons} consonantes`);
console.log(cons);
console.log(`La palabra ${word} tiene ${word.length} letras`);
