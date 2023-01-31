//"Dado un array de numeros, multiplícalos por 3, saca los impares y súmalos"

let numbers = [2, 3, 4, 5, 6, 7];

function newArray (array) {
    return array
    .map(num => num * 3) // 
    .filter(num => num %2) //saca los impares con %2 (módulo)
    .reduce((a, b) => a + b, 0) //suma de numeros, y valor inicial 0
}
newArray(numbers);