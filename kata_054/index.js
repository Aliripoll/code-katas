/* Tienes un array de arrays que contienen números naturales, tu función debe devolver solo los arrays que contengan el segundo argumento y además esa número sea impar.
Nombre función: getArraysWithArgNumber()

Ejemplo 1
Input: [[1, 44, 31, 12], [1, 450, 24], [65,10, 4, 99, 3033]], 1
Output: [[1, 44, 31, 12], [1, 450, 24]] //El 1 es impar y hay 2 arrays que lo contienen


Ejemplo 2
Input: [[1, 44, 31, 12], [1, 450, 24], [65,10, 4, 99, 3033]], 4
Output: [] 
//El 1 es par, por lo tanto aunque exista un array que contenga un 4, no se debe devolver nada */


let info = [[1, 44, 31, 12], [1, 450, 24], [65,10, 4, 99, 3033]];

function getArraysWithArgNumber(array, number) {
    return array.filter((num) => num.includes(number) && num % 2 != 0 )
}

getArraysWithArgNumber(info, 1)