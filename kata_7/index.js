/* KATA 7: Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.
Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 5, 6, 8] Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3] Output: [1, 1, -4, -6] */


let numbers = [2, 4, 5, 6, 8];
let numbers2 = [1, 1, -2, -3];

function multiplyElements (array) {
    return array.map(num => num*2);
}
multiplyElements(numbers);