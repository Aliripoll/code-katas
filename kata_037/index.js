/* Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock y un número de unidades, debes restar el campo "stock" las unidades.

Dentro de la función setStock debes escribir la solución, recibes dos parámetros de entrada:
array: array de productos
integer: unidades
Ejemplo:
Input: 
        [ 
            { name: "Product 1", price: 1000, stock: 10 },
            { name: "Product 2", price: 2000, stock: 20 }, 
            { name: "Product 3", price: 1700, stock: 14 }, 
            { name: "Product 4", price: 3600, stock: 4 } 
        ], 
        7

Output:
        [ 
            { name: "Product 1", price: 1000, stock: 3 }, 
            { name: "Product 2", price: 2000, stock: 13 }, 
            { name: "Product 3", price: 1700, stock: 7 }, 
            { name: "Product 4", price: 3600, stock: -3 } 
        ] 
   
*/        

/* * Ampliación:
los productos que queden con stock negativo, deben añadir una propiedad "sold_out" : true  */




/* const object =     [ 
    { name: "Product 1", price: 1000, stock: 10 },
    { name: "Product 2", price: 2000, stock: 20 }, 
    { name: "Product 3", price: 1700, stock: 14 }, 
    { name: "Product 4", price: 3600, stock: 4 } 
]
7

function setStock (array, integer) {
    return array.map(product => {
        product.stock = product.stock - integer;

        if(product.stock < 0) {
            product.sold_out = true;
      }

        return product;       
    })
   
 
}

setStock(object, 7) */


/*Ampliación 2:
los productos que queden con stock negativo deben aumentar su precio en un 10%  

Input: 
        [ 
            { name: "Product 1", price: 1000, stock: 10 },
            { name: "Product 2", price: 2000, stock: 20 }, 
            { name: "Product 3", price: 1700, stock: 14 }, 
            { name: "Product 4", price: 3600, stock: 4 } 
        ], 
        7
Output:
        [ 
            { name: "Product 1", price: 1000, stock: 3 }, 
            { name: "Product 2", price: 2000, stock: 13 }, 
            { name: "Product 3", price: 1700, stock: 7 }, 
            { name: "Product 4", price: 3960, stock: -3 } 
        ]
 */


        const object =     [ 
            { name: "Product 1", price: 1000, stock: 10 },
            { name: "Product 2", price: 2000, stock: 20 }, 
            { name: "Product 3", price: 1700, stock: 14 }, 
            { name: "Product 4", price: 3600, stock: 4 } 
        ]
        7
        
        function setStock (array, integer) {
            return array.map(product => {
                product.stock = product.stock - integer;
        
                if(product.stock < 0) {
                    product.sold_out = true,
                    product.price = product.price + (product.price *10 / 100);
              }
        
                return product;       
            })
           
         
        }
        
        setStock(object, 7)