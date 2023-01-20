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


/*
AMPLIACIÓN 1
OBJETIVO: Almacenar los números mayores que 5
Input: [5, 2, 7, 8, 3, 10, 22, 1, 6]
Output:  [7, 8, 10, 22, 6]
*/

const nums = [5, 2, 7, 8, 3, 10, 22, 1, 6];

let result = nums.filter(num => num > 5);
console.log(result);



let solution = [];

for (let i = 0; i <= nums.length-1; i++) {
    if (nums[i] > 5) {
        solution.push(nums[i]);
    }    
}
console.log(solution);

