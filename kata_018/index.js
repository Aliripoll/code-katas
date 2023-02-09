/* Dado un array de strings tu reto es retornar la posición dentro del array en donde existe la palabra clave "myKey" y si no existe deberás retornar false, para solucionarlo vas a encontrar una función llamada findMyKey que recibe un parámetro de entrada:
array: Un array de strings. Dentro del cuerpo de la función findMyKey debes escribir tu solución.

Ejemplo 1:
* Input: ["diamonds", "myKey", "spades", "AS"] Output: 1

Ejemplo 2:
* Input: ["diamonds", "hearts", "spades"] Output: false solution();

Ejemplo 3:
* Input: ["myKey", "hearts", "spades"] Output: 0 */

let wordOne = ["diamonds", "myKey", "spades", "AS"];
let wordTwo =  ["diamonds", "hearts", "spades"];
let wordThree = ["myKey", "hearts", "spades"];

function findMyKey(array) {
    let principalWord = "myKey";
    let index = array.indexOf(principalWord);
    if(index === -1) {
        return false;
    }else {
        return index;
    }
}
findMyKey(wordOne);

// AMPLIACIÓN : simplificarlo en una sola línea utilizando el operador ternario.

function findMyKeyTwo(array) {
    let principalWord = "myKey";
    let index = array.indexOf(principalWord);
    return index === -1 ? false : index;
}
findMyKeyTwo(wordOne);