/* En este desafío tienes un array con palabras, tu reto es retornar un array ordenado de la palabra con menos caracteres a la palabra con más caracteres.

Para solucionarlo vas a encontrar una función llamada sortByLength que tiene un parámetro de entrada:

words: Un array con palabras.
Dentro del cuerpo de la función sortByLength debes escribir tu solución.

Ejemplo:

Input:
[
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]

Output:
[
  "Sol",
  "Hola",
  "Viajar",
  "Aprender"
] */

let arrayWords = [
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
  ];

function sortByLength(words) {

   return words.sort((a, b) => a.length - b.length)
    
}

sortByLength(arrayWords);

//AMPLIACIÓN: Ordenar igual pero solo las palabras que contengan la letra que se le pase como argumento a la función 


/*Input:
[
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]

"r"

Output:
[
  "Viajar",
  "Aprender"
] */

let arrayWords2 = [
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
  ]

function sortByLength2(letters, character) {
    return letters
            .filter(word => word.includes(character))
            .sort((a, b) => a.length - b.length)
}

sortByLength2(arrayWords2, "r");