/* Tienes un array de números entre positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.

Para solucionarlo vas a encontrar una función llamada counterNumbers que tiene un parámetro de entrada:

numbers: Un array de números.
Dentro del cuerpo de la función counterNumbers debes escribir tu solución.

Ejemplo 1:

Input:
[1, 2, 2, 3, 3, 3]

Output:
{
  1: 1,
  2: 2,
  3: 3,
}

Ejemplo 2:

Input:
[1, 2, -3, -1, 2, 4, 4, 1, 45, -1]

Output:
{
  '1': 2,
  '2': 2,
  '4': 2,
  '45': 1,
  '-3': 1,
  '-1': 2
} */

let firstNums = [1, 2, 2, 3, 3, 3];
let secondNums = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];

function counterNumbers(numbers) {
  //Números sin repetir
  let uniqueNumbers = new Set(numbers);
  uniqueNumbers = [...uniqueNumbers];
  //Creo un objeto con los números sin repetir y la inicializo a 0
  let objectResult = {};
  uniqueNumbers.map(num => objectResult[`'${num}'`] = 0);

  //
  numbers.map(element => objectResult[`'${element}'`] = objectResult[`'${element}'`] + 1)

  return objectResult;
    
}
counterNumbers(firstNums);
counterNumbers(secondNums);