/* Tienes un array de strings con nombres de personas

Tu reto es el último nombre que contenga la letra pasada como 2º argumento

Parámetros de la funcion: array: Un array de strings, un string: letra

Input:
["Alicia", "Diego", "José Luis", "Camila", "Alfonso", "Helena"], "s"

Output:
Alfonso


Explicación: José Luis también contiene una "s", pero el último del array es Alfonso
*/


let info = ["Alicia", "Diego", "José Luis", "Camila", "Alfonso", "Helena"];

function filterByLetter(array, letter) {

    return array.findLast((element) => element.includes(letter))

}

filterByLetter(info, 's');