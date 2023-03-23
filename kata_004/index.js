/* You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12] */


/////////// Solution 1 /////////////

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10]; 
let array3 = [1, 3, 5, 7, 9];
let array4 = [10, 8, 6, 4, 2];
let array5 = [1, 3, 5, 7, 9, 11, 12];
let array6 = [1, 2, 3, 4, 5, 10, 12];

function mergeArrays (arr1, arr2) {
    let concatAndSortedArray = arr1.concat(arr2).sort((a, b) => a - b);
    //resta a - b = ascendente || resta b - a = descendente;
    let NonDuplicates = new Set(concatAndSortedArray);
    return Array.from(NonDuplicates);
    // Método para convertir un Set en un array
   
    
}
//mergeArrays(array1, array2);
//mergeArrays(array3, array4);
mergeArrays(array5, array6);



// CODEWARS OPTION //

/* function mergeArrays(arr1, arr2) {
    return arr1
      .filter((item) => !arr2.includes(item))
      .concat(arr2)
      .sort((a, b) => a - b)
  } */

