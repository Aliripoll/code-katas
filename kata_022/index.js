/* En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

Para solucionarlo vas a encontrar una función llamada countWords que tiene un parámetro de entrada:

array: Un array de frases
Dentro del cuerpo de la función countWords debes escribir tu solución.

Ejemplo:

Input: [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

Output: 20 */

let text = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ];

function countWords(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        let phrase = array[i].split(" ")
        result = result + phrase.length;
    }
    return result;
}

countWords(text);

function countWords2(array) {
    return array
        .map(phrase => phrase.split(" ").length)
        .reduce((a, b) => a + b, 0);
    
}

countWords2(text);
