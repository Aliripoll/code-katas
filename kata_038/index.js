/* Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar un array de objetos dónde las personas sean mayores o iguales a esas edad:

array: Un array de objetos.
edad: Entero que indica.

Ejemplo:

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
],
22

Output:  [ 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
] 

//
Ampliación 1
Debes añadir un tercer parámetro a la función que será un string con una letra, si esa letra se encuentra en el apellido de la persona, NO deberá
ser filtrado.

Ejemplo:

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
],
22,
'e'

Output:  [ 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }
] 
*/

let personal = [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
];


function info (array, edad, letter) {
    
    return array
    .filter(element => element.age >= edad && !element.lastName.includes(letter))
    
     
}

info(personal, 22, 'e');