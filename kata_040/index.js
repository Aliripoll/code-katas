///////PENDIENTE!!!


/* Tienes dos arrays de objetos que representan datos de productos con los siguientes atributos:name, price, stock. Debes juntar los productos de ambas tiendas.
La función debe hacer lo suguiente:
-  Si hay dos productos con el mismo nombre, ese producto debe unificarse de la siguiente manera:
    - El atributo "name" se mantiene y añadimos al final del nombre " [X]":
    - El precio debe ser la media entre ambos
    - El stock debe ser la suma entre ambos
-  Si no tiene el mismo nombre, el producto se queda como 

Debe estar ordenado por stock de MENOR a MAYOR.

Dentro de la función setProducts debes escribir la solución, recibes dos parámetros de entrada:
array1: array de productos de la tienda 1
array2: array de productos de la tienda 2

Ejemplo:
Input: 
        [ 
            { name: "Tablón madera", price: 1000, stock: 6},
            { name: "Secador de mano", price: 2000, stock: 20}, 
            { name: "Pelacables", price: 1800, stock: -42}, 
            { name: "Motosierra", price: 1700, stock: 14}, 
            { name: "Clavos del 3", price: 3600, stock: 4}, 
            { name: "Martillo", price: 2600, stock: -6}
        ],
        [ 
            { name: "Pelacables", price: 400, stock: 26},
            { name: "Cubo de basura", price: 200, stock: 300}, 
            { name: "Manta eléctrica", price: 7250, stock: 4}, 
            { name: "Motosierra", price: 4000, stock: -6}, 
            { name: "Clavos del 3", price: 2500, stock: -21}, 
            { name: "Martillo", price: 2600, stock: 13}
        ]

Output:
        [ 
            { name: "Clavos del 3 [X]", price: 3050, stock: -17},
            { name: "Pelacables [X]", price: 1100, stock: -16},
            { name: "Martillo [X]", price: 2600, stock: 7},
            { name: "Manta eléctrica", price: 7250, stock: 4}, 
            { name: "Tablón madera", price: 1000, stock: 6},
            { name: "Motosierra [X]", price: 2850, stock: 8}, 
            { name: "Secador de mano", price: 2000, stock: 20}, 
            { name: "Cubo de basura", price: 200, stock: 300}            
        ] */



let firstShop =         [ 
    { name: "Tablón madera", price: 1000, stock: 6},
    { name: "Secador de mano", price: 2000, stock: 20}, 
    { name: "Pelacables", price: 1800, stock: -42}, 
    { name: "Motosierra", price: 1700, stock: 14}, 
    { name: "Clavos del 3", price: 3600, stock: 4}, 
    { name: "Martillo", price: 2600, stock: -6}
];

let secondShop =
[ 
    { name: "Pelacables", price: 400, stock: 26},
    { name: "Cubo de basura", price: 200, stock: 300}, 
    { name: "Manta eléctrica", price: 7250, stock: 4}, 
    { name: "Motosierra", price: 4000, stock: -6}, 
    { name: "Clavos del 3", price: 2500, stock: -21}, 
    { name: "Martillo", price: 2600, stock: 13}
];    

function setProducts (array1, array2) {
    let finalShop =  array1.concat(array2);
    return finalShop;

}
setProducts(firstShop, secondShop);


