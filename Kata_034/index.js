/* Tienes un array con una lista de strings con nombres y apellidos, tu reto es retornar un array que solo contenga consonantes y que este ordenado alfabéticamente de manera 
descendente. 

array: Un array de strings.
Dentro del cuerpo de la función sortOnlyConsonants debes escribir tu solución.

Ejemplo:
Input:
[
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador",
  "Jairo Sepul",
  "héctor Forte"
]
Output:
[ 
  'ndr Prz',
  'hctr Frt',
  'Zlm Vcnt',
  'Ncls Mln',
  'Jn mdr' 
] */

let newArray = [
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador",
    "Jairo Sepul",
    "héctor Forte"
  ]

function sortOnlyConsonants(inputArray) {
    return inputArray
    
    .map(element => element.replaceAll(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g,""))
    .sort((a,b) => {
      if(a == b) {
        return 0;
      } else if(a > b) {
        return -1;
      }
      return 1;
    })
    
    
    
}

sortOnlyConsonants(newArray);