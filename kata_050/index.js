/* Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock 

La función debe hacer lo suguiente:
- Si la letra pasada como segundo argumento se encuentra en el atributo "name", debemos
sumar al stock existen el número entero pasado como tercer argumento.

Dentro de la función debes escribir la solución, recibes dos parámetros de entrada:
array: array de productos
string: letra
integer: stock a sumar


Ejemplo:
Input: 
        [ 
            { name: "Tablón madera", price: 1000, stock: 6 },
            { name: "Secador de mano", price: 2000, stock: 20 }, 
            { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
            { name: "Motosierra", price: 1700, stock: 14 }, 
            { name: "Clavos del 3", price: 3600, stock: 4 }, 
            { name: "Martillo de hierro", price: 2600, stock: 5 }
        ], 
        "l",
        10
Output:
        [ 
            { name: "Tablón madera", price: 1000, stock: 16 },
            { name: "Secador de mano", price: 2000, stock: 20 }, 
            { name: "Pelacables amarillo", price: 1800, stock: 32 }, 
            { name: "Motosierra", price: 1700, stock: 14 }, 
            { name: "Clavos del 3", price: 3600, stock: 14 }, 
            { name: "Martillo de hierro", price: 2600, stock: 15 }
        ]
*/

let info = [ 
    { name: "Tablón madera", price: 1000, stock: 6 },
    { name: "Secador de mano", price: 2000, stock: 20 }, 
    { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
    { name: "Motosierra", price: 1700, stock: 14 }, 
    { name: "Clavos del 3", price: 3600, stock: 4 }, 
    { name: "Martillo de hierro", price: 2600, stock: 5 }
];


function sumStock(array, string, integer) {

    return array.filter((element) => {
        if(element.name.contains(string)) {
            

        }
    })

}