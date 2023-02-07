/* Tu reto es retornar true si dentro de array de números al menos uno es un número, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:
numbers: Un array de números. Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 3, 5, 7, 10, 11] Output: true

Ejemplo 2:

Input: [1, 3, 5] Output: true

Ejemplo 3:

Input: [] Output: false */

let arrayOne = [1, 3, 5, 7, 10, 11];
let arrayTwo = [1, 3, 5];
let arrayThree = [];

function checkArray(numbers) {
   if (numbers.find(element => element > 0)) {
    return true;
   } else {
    return false;
   }
}
checkArray(arrayOne);
checkArray(arrayTwo);
checkArray(arrayThree);