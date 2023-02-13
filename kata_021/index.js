/* En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos, para solucionarlo vas a encontrar una función llamada mergeArrays que recibe dos parámetros de entrada:

arrayA: Un array
arrayB: Un array
Dentro del cuerpo de la función mergeArrays debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5 , 6]

Ejemplo 2:

Input: ["A", "B", "C"], ["D", "E", "H"]
Output: ["A", "B", "C", "D", "E", "H"] */

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let thirdArray = ["A", "B", "C"];
let fourthArray = ["D", "E", "H"];

function mergeArrays(arrayA, arrayB) {
   return arrayA.concat(arrayB);
}

mergeArrays(firstArray, secondArray);
mergeArrays(thirdArray, fourthArray);
