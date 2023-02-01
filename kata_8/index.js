/* Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar un array de strings con solo los nombres, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos. Dentro del cuerpo de la función getNames debes escribir tu solución.

Ejemplo:

Input: [ { name: 'Nicolas', lastName: 'Molina', age: 28 }, { name: 'Valentina', lastName: 'Molina', age: 19 }, { name: 'Zulema', lastName: 'Vicente', age: 21 }, ]

Output: ['Nicolas', 'Valentina', 'Zulema'] */


let info = [ { name: 'Nicolas', lastName: 'Molina', age: 28 }, { name: 'Valentina', lastName: 'Molina', age: 19 }, { name: 'Zulema', lastName: 'Vicente', age: 21 }, ];

function getNames(array) {
    return array.map(user => user.name)
}
getNames(info);


////// AMPLIACIÓN ///////

/* Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar un array de strings con solo los nombres -que contengan la vocal "e"-, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos. Dentro del cuerpo de la función getNames debes escribir tu solución.

Ejemplo:

Input: [ { name: 'Nicolas', lastName: 'Molina', age: 28 }, { name: 'Valentina', lastName: 'Molina', age: 19 }, { name: 'Zulema', lastName: 'Vicente', age: 21 }, ]

Output: ['Valentina', 'Zulema'] */

let info2 = [ { name: 'Nicolas', lastName: 'Molina', age: 28 }, { name: 'Valentina', lastName: 'Molina', age: 19 }, { name: 'Zulema', lastName: 'Vicente', age: 21 }, ];

function getNames2(array) {
    return array
    .map(user => user.name)
    .filter(user => user.includes("e"))
}
getNames2(info2);