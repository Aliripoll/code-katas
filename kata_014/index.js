/* Tienes un array de números y tu reto es retornar la suma de todos los valores en él.
Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números. Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1] Ouput: 3

Ejemplo 2:

Input: [2, 4, 8] Output: 14

Ejemplo 3:

Input: [] Output: 0 */

let firstNum = [1, 1, 1];
let secondNum = [2, 4, 8];
let thirdNum = [];



function calcSum(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum; 
}
calcSum(firstNum);
//calcSum(secondNum);
//calcSum(thirdNum);