/*Tu reto es devolver la suma de los índices de los nombres que contengan la letra pasada como 2º argumento

Parámetros de la funcion: array: Un array de strings, un string: letra

Input:
["Alicia", "Diego", "José Luis", "Camila", "Alfonso", "Helena"], "s"

Output:
6


Explicación: José Luis y Alfonso contienen una "s" y sus índices son 2 y 4 respectivamente, por lo tanto, 2 + 4 = 6
*/

let info = ["Alicia", "Diego", "José Luis", "Camila", "Alfonso", "Helena"];

function foundIndex (array, string) {

    let total = 0;
     array.map((element, index) => {
        if (element.toLowerCase().includes(string)) {
            total += index;
        }
    });
    return total;
}

foundIndex(info, "s");

