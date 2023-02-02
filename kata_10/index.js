/* Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.
Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strings con palabras. Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día'] Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas'] Output: [ 'rosa', 'gafas' ] */

let names = ['amor', 'sol', 'piedra', 'día'];
let names2 = ['rosa', 'gol', 'pez', 'día', 'gafas',];

function filterByLength(array) {
    return array.filter(element => element.length >= 4);
}
filterByLength(names);
filterByLength(names2);


/* AMPLIACIÓN 
Además debe contener la vocal "i" */

let nam = ['amor', 'sol', 'piedra', 'día'];
let nam2 = ['rosa', 'gol', 'pez', 'día', 'gafas', "silla"];

function filterByLength2(array) {
    return array.filter(element => element.length >= 4 && element.includes("i"));
}
filterByLength2(nam);
filterByLength2(nam2);