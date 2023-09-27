/* Tu reto es retornar el array ordenado de manera ascendente que contengan solo números impares mayores que 20
numbers: Un array de números. Dentro del cuerpo de la función checkArray debes escribir tu solución.


Input: [-10, 1031, 34, 5, 71, 20, 19, -4, 456] 
Output: [71, 1031]
*/

let info = [-10, 1031, 34, 5, 71, 20, 19, -4, 456]; 

function checkArray(array) {
    return array
    .filter((num) => num %2 && num > 20)
    .sort((a, b) => a - b)
}

checkArray(info);