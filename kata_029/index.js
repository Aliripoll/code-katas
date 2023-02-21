/* Tienes un array de números entre positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

Para solucionarlo vas a encontrar una función llamada filterUnique que tiene un parámetro de entrada:

array: Un array de números.
Dentro del cuerpo de la función filterUnique debes escribir tu solución.

Ejemplo 1:

Input: [3, 3, 2, 2, 1, 1]
Output: [1, 2, 3]

Ejemplo 1:

Input: [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
Output: [ -3, -1, 1, 2, 4, 45 ] */

let numbers = [3, 3, 2, 2, 1, 1];
let secondNumbers = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];

function filterUnique(array) {
    return array
        .filter((item, index) => {
                return array.indexOf(item) === index;
            })
        .sort((a, b) => a -b);
} 

filterUnique(numbers);
filterUnique(secondNumbers);


// SEGUNDA SOLUCIÓN

 function filterUnique2(array) {
    let newArray = new Set(array);
    return [...newArray].sort((a, b) => a - b);
        
}


filterUnique2(numbers);
filterUnique2(secondNumbers);