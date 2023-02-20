/* Tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, tu reto es retornar ese array ordenado alfabéticamente por el apellido, para solucionarlo vas a encontrar una función llamada sortByLastName que tiene un parámetro de entrada:

array: Un array de strings.
Dentro del cuerpo de la función sortByLastName debes escribir tu solución.

Ejemplo:

Input:
[
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
]

Output:
[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
] */


let lastName = [
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador",
  ]

function sortByLastName(array) {
  return array.sort((a, b) => {
    let lastNameA = a.split(' ');
    let lastNameB = b.split(' ');
      if (lastNameA[1] < lastNameB[1]) {
          return -1;
      }
    if (lastNameA[1] > lastNameB[1]) {
          return 1;
      }
    return 0;
    });
}

sortByLastName(lastName);
