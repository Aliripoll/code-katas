/* OBJETIVO: Dado un array, devuelve el array invertido 
Input: [1, 2, 3]
Output:  [3, 2, 1]
CONSIDERACIONES: Entregar 2 soluciones posibLes, una usando Array.prototype.reverse y otra sin usarlo */
 

const numbers = [1, 2, 3];

//solution one

let firstSolution = numbers.reverse();
console.log(firstSolution);

//solution two

let secondSolution = [];

for (let i = numbers.length-1; i >= 0; i--) {
    secondSolution.push(numbers[i]);
    
}
console.log(secondSolution);