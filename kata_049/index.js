/* Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock 

La función debe hacer lo suguiente:
- Si el campo "stock" se encuentra en el rango de números pasados por argumento (solo se devolverán los objetos que cumplan este requisito), 
además hay que modificar el atributo "name" y sustituir los espacios por guiones "-".

Dentro de la función setStock debes escribir la solución, recibes dos parámetros de entrada:
array: array de productos
integer: mayorQue
integer: menorQue


Ejemplo:
Input: 
        [ 
            { name: "Tablón madera", price: 1000, stock: 6 },
            { name: "Secador de mano", price: 2000, stock: 20 }, 
            { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
            { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
            { name: "Clavos del 3", price: 3600, stock: 4 }, 
            { name: "Martillo de hierro", price: 2600, stock: 5 }
        ], 
        7,
        20
Output:
        [
            { name: "Motosierra-con-6-velocidades", price: 1700, stock: 14 }
        ]
*/

let info =  [ 
    { name: "Tablón madera", price: 1000, stock: 6 },
    { name: "Secador de mano", price: 2000, stock: 20 }, 
    { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
    { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
    { name: "Clavos del 3", price: 3600, stock: 4 }, 
    { name: "Martillo de hierro", price: 2600, stock: 5 }
];

function setStock (array, greater, lower) {
    return array
    
    
    .filter((element => {
        if(element.stock < lower && element.stock > greater) {
            element.name = element.name.replaceAll(' ', '-')
           return element;
        }

    }))
   
    
}

setStock(info, 7, 20);