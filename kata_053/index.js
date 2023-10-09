/* Dado un array de strings y una letra, debes devolver el número de coincidencias de esa letra. No debe distinguir entre mayúsculas y minúsculas.

Ejemplo 1:
Input: ["amor", "sol", "piedra", "vaso"], "a"
Output: 3

Input: ["amor", "sol", "piedra", "vaso"], "V"
Output: 1

Input: ["amor", "sol", "piedra", "vaso"], "z"
Output: 0 */

let info = ["amor", "sol", "piedra", "vaso"];

function charCount(array, letter) {
    let newArray = array.filter((word) => word.includes(letter.toLowerCase())
    );
    return newArray.length
}


charCount(info, 'V');