/* Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock 

La función debe hacer lo suguiente:
- Devolver solo los productos que tengan como stock un número par

Dentro de la función getEvens debes escribir la solución, recibes un parámetros de entrada
array: array de productos


Ejemplo:
Input: 
        [ 
            { name: "Tablón madera", price: 1000, stock: 6 },
            { name: "Secador de mano", price: 2000, stock: 21 }, 
            { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
            { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
            { name: "Clavos del 3", price: 3600, stock: 43 }, 
            { name: "Martillo de hierro", price: 2600, stock: 5 }
        ],
Output:
        [
            { name: "Tablón madera", price: 1000, stock: 6 },
            { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
            { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
        ] */


        
let info = [
            { name: "Tablón madera", price: 1000, stock: 6 },
            { name: "Secador de mano", price: 2000, stock: 21 }, 
            { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
            { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
            { name: "Clavos del 3", price: 3600, stock: 43 }, 
            { name: "Martillo de hierro", price: 2600, stock: 5 }
        ];
        
        
function gitEvens(array) {
     return array.filter(number => number.stock %2 === 0);

     }

gitEvens(info);