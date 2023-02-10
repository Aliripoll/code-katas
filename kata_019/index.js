/* Dado un array de strings tu reto es retornar un string en donde cada elemento del array esté separado por comas, para solucionarlo vas a encontrar una función llamada joinString que recibe un parámetro de entrada:
words: Un array de strings. Dentro del cuerpo de la función joinString debes escribir tu solución.

Ejemplo 1:

Input: ["amor", "sol", "piedra", "día"] Output: "amor,sol,piedra,día"

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"] Output: "diamonds,hearts,spades" */

let words1 = ["amor", "sol", "piedra", "día"];
let words2 = ["diamonds", "hearts", "spades"];

function joinString(words) {
    return words.join();
}
joinString(words1);