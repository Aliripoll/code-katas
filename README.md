## katas de javascript

##### Kata 1: 

OBJETIVO: Dado un array, devuelve el array invertido. 
* Input: [1, 2, 3]. Output:  [3, 2, 1].   
CONSIDERACIONES: Entregar 2 soluciones posibles, una usando Array.prototype.reverse y otra sin usarlo 

- AMPLIACIÓN 1
OBJETIVO: Almacenar los números mayores que 5. 
* Input: [5, 2, 7, 8, 3, 10, 22, 1, 6]. Output:  [7, 8, 10, 22, 6]
---

##### Kata 2: 

OBJETIVO: Dado un array de números enteros, escriba una función que devuelva true cuando el array tenga valores duplicados.
* Input: [1, 1, 2, 2, 3, 5, 9, 9]. Output: true. 
CONSIDERACIONES: Entregar 2 soluciones posibles, una usando new Set() y otra sin usarlo.
---
##### Kata 3: 
OBJETIVO: Agregar y eliminar elementos de un array.
Escriba una función que agregue o elimine un elemento en la primera o última posición de un array.
CONSIDERACIONES: presentar varias alternativas, una con mutación del array y otra sin mutación (editado)
---

##### Kata 4: 

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
---

##### Kata 5: 

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

* invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
* invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
* invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
---
##### Kata 6: 
OBJETIVO: Dado un array de numeros, multiplícalos por 3, saca los impares y súmalos.
---
##### Kata 7: 

Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.
Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:
* Input: [2, 4, 5, 6, 8] Output: [4, 8, 10, 12, 16]

Ejemplo 2:
* Input: [1, 1, -2, -3] Output: [1, 1, -4, -6] 
---
##### Kata 8: 

Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar un array de strings con solo los nombres, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos. Dentro del cuerpo de la función getNames debes escribir tu solución.

Ejemplo:

* Input: [ { name: 'Nicolas', lastName: 'Molina', age: 28 }, { name: 'Valentina', lastName: 'Molina', age: 19 }, { name: 'Zulema', lastName: 'Vicente', age: 21 }, ]
* Output: ['Nicolas', 'Valentina', 'Zulema']

- AMPLIACIÓN
Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar un array de strings con solo los nombres -que contengan la vocal "e"-, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada.
---
##### Kata 9: 

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock. 
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos. Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

Ejemplo:
* Input: [ { name: "Product 1", price: 1000, stock: 10 }, { name: "Product 2", price: 2000, stock: 20 } ]
* Output: [ { name: "Product 1", price: 1000, stock: 10, taxes: 190 }, { name: "Product 2", price: 2000, stock: 20, taxes: 380 } ]
---
##### Kata 10: 

Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.
Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strings con palabras. Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:
*  Input: ['amor', 'sol', 'piedra', 'día'] Output: [ 'amor', 'piedra' ]

Ejemplo 2:
*  Input: ['rosa', 'gol', 'pez', 'día', 'gafas'] Output: [ 'rosa', 'gafas' ]

- AMPLIACIÓN
Además debe contener la vocal "i".
---
###### Kata 11:

Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:
customerName: string total: number delivered: boolean. Tu reto es filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

Para solucionarlo vas a encontrar una función llamada filterOrders que recibe un parámetro de entrada:

array: Un array de objetos Dentro del cuerpo de la función filterOrders debes escribir tu solución.

Ejemplo:

Input: [ { customerName: "Nicolas", total: 100, delivered: true, }, { customerName: "Zulema", total: 120, delivered: false, }, { customerName: "Santiago", total: 300, delivered: true, } ]

Output: [ { customerName: "Nicolas", total: 100, delivered: true, }, { customerName: "Santiago", total: 300, delivered: true, } ]