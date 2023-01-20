/* OBJETIVO: Dado un array de números enteros, escriba una función que devuelva true cuando el array tenga valores duplicados.
Input: [1, 1, 2, 2, 3, 5, 9, 9]
Output: true
CONSIDERACIONES: Entregar 2 soluciones posibles, una usando new Set() y otra sin usarlo */


///// SOLUCIÓN 1 /////

const numbers = [1, 1, 2, 2, 3, 5, 9, 9];

function firstSolution (numbers) {
    const nonDuplicates = new Set(numbers);
    let solution = numbers.length > nonDuplicates.size;
    return solution; 
}
firstSolution(numbers);

///// SOLUCIÓN 2 /////

function secondSolution (numbers) {
    let checked = [];

    for (n of numbers) {
        if (checked.indexOf(n) !== -1) {
            return true;
        } else {
            checked.push(n);
        }
    }
    return false; 
}




 
