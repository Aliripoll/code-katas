/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. */

let array1 = [1,2,3,4,5];
let array2 = [1,-2,3,-4,5];

function invert(array) {
    return array.map(num => num * -1);
}
invert(array1);

/// Crea una función que multiplique x2 solo los positivos ///

function positiveNumbers(array) {
        return array.map ((num) => {
            if (num > 0) {
                return num*2;
            } else {
                return num; 
            }
        });
    
}
positiveNumbers(array1);
