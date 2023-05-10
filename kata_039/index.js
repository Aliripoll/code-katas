/* Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock y un número de unidades
La función debe hacer lo suguiente:
-  Si el stock es positivo, debemos restar "unidades" al stock original y si queda en negativo, la propiedad "special" cambiará a true.
-  Si el stock es negativo NO debemos restar el stock siempre y cuando su atributo "special" no sea true, si es true, si qué debemos restar el stock.
-  Además, debes devolver los productos ordenados por precio de mayor a menor.

Dentro de la función setStock debes escribir la solución, recibes dos parámetros de entrada:
array: array de productos
integer: unidades

Ejemplo:
Input: 
        [ 
            { name: "Tablón madera", price: 1000, stock: 6, special: false },
            { name: "Secador de mano", price: 2000, stock: 20, special: false }, 
            { name: "Pelacables", price: 1800, stock: -42, special: false }, 
            { name: "Motosierra", price: 1700, stock: 14, special: true }, 
            { name: "Clavos del 3", price: 3600, stock: 4, special: false }, 
            { name: "Martillo", price: 2600, stock: -6, special: true }
        ], 
        7

Output:
        [ 
            { name: "Clavos del 3", price: 3600, stock: -3, special: true }, 
            { name: "Martillo", price: 2600, stock: -13, special: true },
            { name: "Secador de mano", price: 2000, stock: 13, special: false },
            { name: "Pelacables", price: 1800, stock: -42, special: false }, 
            { name: "Motosierra", price: 1700, stock: 7, special: true }, 
            { name: "Tablón madera", price: 1000, stock: -1, special: true },            
        ] */


        let stockInfo =  [ 
            { name: "Tablón madera", price: 1000, stock: 6, special: false },
            { name: "Secador de mano", price: 2000, stock: 20, special: false }, 
            { name: "Pelacables", price: 1800, stock: -42, special: false }, 
            { name: "Motosierra", price: 1700, stock: 14, special: true }, 
            { name: "Clavos del 3", price: 3600, stock: 4, special: false }, 
            { name: "Martillo", price: 2600, stock: -6, special: true }
        ];

        function setStock (array, integer) {
            return array 
            .map((product) => {

                if(product.stock > 0) {
                    product.stock = product.stock - integer; 
                    if(product.stock < 0) {
                        product.special = true;
                    }
                }

               else if(product.stock <0 && product.special === true) {
                    product.stock = product.stock - integer;
                
                }

                return product;
            })
            .sort((a, b) => b.price - a.price)
        }

        setStock(stockInfo, 7)