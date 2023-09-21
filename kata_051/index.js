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
        ] 
        
*/


        
let info = [
            { name: "Tablón madera", price: 1000, stock: 6 },
            { name: "Secador de mano", price: 2000, stock: 21 }, 
            { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
            { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
            { name: "Clavos del 3", price: 3600, stock: 43 }, 
            { name: "Martillo de hierro", price: 2600, stock: 5 }
        ];
        
        
function getEvens(array) {
     return array.filter(product => product.stock %2 === 0);

     }

getEvens(info);

/* //AMPLIACIÓN 1:
La función debe hacer lo siguiente:
- Devolver solo los productos que tengan como stock un número par y además debe crear un atributo con el nombre "isEven" con el valor true.

Hazlo en otra función llamada getEvensV2()

Output:
    [
        { name: "Tablón madera", price: 1000, stock: 6, isEven: true },
        { name: "Pelacables amarillo", price: 1800, stock: 22, isEven: true }, 
        { name: "Motosierra con 6 velocidades", price: 1700, stock: 14, isEven: true }, 
    ]  */

    let info2 = [
        { name: "Tablón madera", price: 1000, stock: 6 },
        { name: "Secador de mano", price: 2000, stock: 21 }, 
        { name: "Pelacables amarillo", price: 1800, stock: 22 }, 
        { name: "Motosierra con 6 velocidades", price: 1700, stock: 14 }, 
        { name: "Clavos del 3", price: 3600, stock: 43 }, 
        { name: "Martillo de hierro", price: 2600, stock: 5 }
    ];

    function getEvensV2(array) {
        return array.filter((product) => {
            
            if(product.stock %2 === 0) {
                product.isEven = true;

                return product;
            }
            
            
        });
    }

    getEvensV2(info2);