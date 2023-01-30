/* OBJETIVO: Agregar y eliminar elementos de un array.
Escriba una función que agregue o elimine un elemento en la primera o última posición de un array.


CONSIDERACIONES: presentar varias alternativas, una con mutación del array y otra sin mutación (editado)  */



/* Ejemplo 1 añadir al principio:
Input: [1, 6, 9]
Output: [5, 1, 6, 9] */

///////////// Alternativa 1 ////////////
let numbers = [1, 6, 9];
let newNum = 5;

function lastNumber () {
    numbers.unshift(newNum);
    
}
lastNumber();
console.log(numbers); 

/////////// Alternativa 2 ///////////

const newArray = numbers.unshift(5);
console.log(numbers);

/* 
Ejemplo 2 añadir al final:
Input: [1, 6, 9]
Output: [1, 6, 9, 12]
 */

///////////// Alternativa 1 ////////////
const secondNumbers = [1, 6, 9];
const secondArray = secondNumbers.push(12);
console.log(secondNumbers); 

/////////// Alternativa 2 ///////////
console.log(...secondNumbers, 12);

/* Ejemplo 3 eliminar al principio:
Input: [1, 6, 9]
Output: [6, 9] */
const thirdNumbers = [1, 6, 9];
const thirdArray = thirdNumbers.shift();
console.log(thirdNumbers);

/* Ejemplo 4 eliminar al final:
Input: [1, 6, 9]
Output: [1, 6] */
const fourthNumbers = [1, 6, 9];
const fourthArray = fourthNumbers.pop();
console.log(fourthNumbers);