/* 

Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar la suma de las edades.

array: Un array de objetos.
edad: Entero que indica.

ES OBLIGATORIO HACERLO CON UN BUCLE FOR

Ejemplo:

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
]

Output: 115


AMPLIACION 1
Retornar la media de edad

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
]

Output: 23

*/

let Info = [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
];

function newInfo (array) {
let sum= 0;
    for (let i= 0; i < array.length; i++) {
        sum+= array[i].age / array.length;
    }
    return sum;
}

newInfo(Info);

/* AMPLIACION 2
Recibes 2 argumentos, array con personas y un número (edad máxima). Retornar la media de edad de las personas que sean menores o iguales que el argumento "edad máxima" 

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
],
21

Output: 19,33
*/

let Info2 = [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
];

function newInfo2 (array, number) {
    let sum = 0;
    let count = 0;
    for (let i= 0; i < array.length; i++) {
        if(array[i].age <= number) {
            sum += array[i].age;
            count += 1;
        }
    }
    return sum / count;
}

newInfo2(Info2, 21)