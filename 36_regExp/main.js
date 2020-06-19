/*
! Expresiones Regulares
* Son una secuencia de carácteres que forman un patrón de busqueda, principalmente utilizada para la búsqueda de patrones de cadenas de carácteres u operaciones de sustituciones

? Sintaxis
* /patrón/

? Banderas:
* i: ignore case. No diferencia entre mayúsculas y minúsculas.
* g: global. Busca de forma global, es decir, no se para después de la primera coincidencia.

? Comodines:
* Sustitución: Define el comodín dentro del patron. El simbolo es el "."
* Listado de carácteres válidos: Entre corchetes se pone una lista de carácteres validos. 
- [aeiou] Con esto cogeríamos todas las vocales.
* Rangos: Entre corchetes si ponemos un guión entre dos carácteres establecemos un rango. 
- [a-z] Todas las letras minúsculas.
* Mezclas entre rangos y listas: Podemos incluir los dos anteriores en una misma expresión. 
- [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"
* Cadenas completas: Para establecer una cadena completa debe ir entre paréntesis. Si queremos más palabras irán separadas por un pipe. (lorem|amet) -> es válida la palabra lorem y la palabra amet. //! LOS ESPACIOS CUENTAN.

? Delimitadores:
* ^ Antes de este símbolo no puede haber nada.
* $ Después de este símbolo no puede haber nada.
   ^hola$

? Cantidad:
* llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres conbinaciones posibles:
- {n} Se tiene que repetir n veces.
- {n, m} Se tiene que repetir entre n y m veces, ambas incluidas.
- {n,} Se tiene que repetir como mínimo n veces y sin máximo.
^[a-zA-Z]{1,3}@{1}$
* Asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.
.*@.*\..*
* Interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
^[ae]?$
* Operador más: Lo que está antes del más tiene que estar una vez como mínimo.
A-[0-9]+

? Carácteres:
* \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de línea y retorno de carro.
^[a-zA-Z]+\s[a-zA-Z]+$
* \S: Coincide con todo menos con carácteres de espacio.
^\S{5}$
* \d: Coincide con un carácter de número. Equivalente a [0-9].
^\d{5}$
* \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9]
^\D{5}$
* \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_]
^\w+@$
* \W: Coincide con todo menos con carácteres de palabra.
^\W+$

TODO: https://ascii.cl/es/ -> Tabla ASCII

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

const text = document.getElementById("text").textContent; // Referencia al contenido del elemento

//* Formas de construir expresiones regulares:
const regExp = /lorem/gi;
const regExp2 = new RegExp("lorem", "gi");
const regExp3 = new RegExp("/lorem/", "gi");

console.log(regExp.test(text));
console.log(regExp2.test(text));
console.log(regExp3.test(text));
