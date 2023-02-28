## katas de javascript

#### Kata 1: 

OBJETIVO: Dado un array, devuelve el array invertido. 
* Input: [1, 2, 3]. Output:  [3, 2, 1].   
CONSIDERACIONES: Entregar 2 soluciones posibles, una usando Array.prototype.reverse y otra sin usarlo 

- AMPLIACIÓN 1
OBJETIVO: Almacenar los números mayores que 5. 
* Input: [5, 2, 7, 8, 3, 10, 22, 1, 6]. Output:  [7, 8, 10, 22, 6]
---

#### Kata 2: 

OBJETIVO: Dado un array de números enteros, escriba una función que devuelva true cuando el array tenga valores duplicados.
* Input: [1, 1, 2, 2, 3, 5, 9, 9]. Output: true. 
CONSIDERACIONES: Entregar 2 soluciones posibles, una usando new Set() y otra sin usarlo.
---
#### Kata 3: 

OBJETIVO: Agregar y eliminar elementos de un array.
Escriba una función que agregue o elimine un elemento en la primera o última posición de un array.
CONSIDERACIONES: presentar varias alternativas, una con mutación del array y otra sin mutación (editado)

---
#### Kata 4: 

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
---

#### Kata 5: 

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

* invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
* invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
* invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
---
#### Kata 6: 

OBJETIVO: Dado un array de numeros, multiplícalos por 3, saca los impares y súmalos.

---
#### Kata 7: 

Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.
Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:
* Input: [2, 4, 5, 6, 8] Output: [4, 8, 10, 12, 16]

Ejemplo 2:
* Input: [1, 1, -2, -3] Output: [1, 1, -4, -6] 
---
#### Kata 8: 

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
#### Kata 9: 

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock. 
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos. Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

Ejemplo:
* Input: [ { name: "Product 1", price: 1000, stock: 10 }, { name: "Product 2", price: 2000, stock: 20 } ]
* Output: [ { name: "Product 1", price: 1000, stock: 10, taxes: 190 }, { name: "Product 2", price: 2000, stock: 20, taxes: 380 } ]
---
#### Kata 10: 

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
#### Kata 11:

Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:
customerName: string total: number delivered: boolean. Tu reto es filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

Para solucionarlo vas a encontrar una función llamada filterOrders que recibe un parámetro de entrada:

array: Un array de objetos Dentro del cuerpo de la función filterOrders debes escribir tu solución.

Ejemplo:
* Input: [ { customerName: "Nicolas", total: 100, delivered: true, }, { customerName: "Zulema", total: 120, delivered: false, }, { customerName: "Santiago", total: 300, delivered: true, } ]

* Output: [ { customerName: "Nicolas", total: 100, delivered: true, }, { customerName: "Santiago", total: 300, delivered: true, } ]
---

#### Kata 12: 

Tu reto en este desafío es buscar si ese string tiene un término de búsqueda dado, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así el término de búsqueda sea mayúscula o minúscula.
Para solucionarlo vas a encontrar una función llamada checkInString que recibe dos parámetros de entrada:

text: Un string term: Un string con el término a buscar Dentro del cuerpo de la función checkInString debes escribir tu solución.

Ejemplo 1:
* Input: "Ana lava la tina", "ana" Output: true

Ejemplo 2:
* Input: "Santiago", "tiago" Output: true

Ejemplo 3:
* Input: "Nicolas", "ana" Output: false   
---

#### Kata 13:

Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.
Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

array: Un array de strigs con palabras term: Un string con el término a buscar Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

Ejemplo 1:
* Input: array: ["ana", "santi", "nico", "anastasia"] term: "ana". Ouput: ["ana", "anastasia"]

Ejemplo 2:
* Input: array: ["ana", "santi", "nico", "anastasia"] term: "xyz". Output: [] 
---

#### Kata 14:

Tienes un array de números y tu reto es retornar la suma de todos los valores en él.
Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números. Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:
* Input: [1, 1, 1] Ouput: 3

Ejemplo 2:
* Input: [2, 4, 8] Output: 14

Ejemplo 3:
* Input: [] Output: 0
---

#### Kata 15:

Tu reto es retornar true si dentro de array de números al menos uno es un número, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:
numbers: Un array de números Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:
* Input: [1, 3, 5, 7, 10, 11] Output: true

Ejemplo 2:
* Input: [1, 3, 5] Output: true

Ejemplo 3:
* Input: [] Output: false

- AMPLIACIÓN: Realizar el mismo ejercicio pero con números negativos y positivos y con string. Resolverlo de dos formas diferentes.
* Input 1: [1, -3, -5, 7, 10, 11] Output: true
* Input 2: ["paco", "ana"] Output: false;
* Input 3: ["paco", 2 ,"ana"] Output: true;
---

#### Kata 16:

Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada: numbers: Un array de números Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1: 
* Input: [2, 4, 6, 8, 10] Output: true

Ejemplo 2: 
* Input: [1, 3, 5, 7, 10, 11] Output: false

Ejemplo 3: 
* Input: [1, 3, 5] Output: false

Ejemplo 4: 
* Input: [] Output: false
---

#### Kata 17:

Tu reto es retornar "Tienes el AS" si dentro de array de strings tienes la palabra AS y si no tienes el AS entonces deberás retornar "No tienes el AS", para solucionarlo vas a encontrar una función llamada findAs que recibe un parámetro de entrada:
numbers: Un array de strigs con nombres de cartas de Poker. Dentro del cuerpo de la función findAs debes escribir tu solución.

Ejemplo 1:
* Input: ['diamonds', 'hearts', 'spades', 'AS'] Output: 'Tienes el AS'

Ejemplo 2:
* Input: ['diamonds', 'hearts', 'spades'] Output:'No tienes el AS'

AMPLIACIÓN: 
Intentar hacer la función utilizando el operador ternario, simplificando el código a una linea.

---

#### Kata 18:

Dado un array de strings tu reto es retornar la posición dentro del array en donde existe la palabra clave "myKey" y si no existe deberás retornar false, para solucionarlo vas a encontrar una función llamada findMyKey que recibe un parámetro de entrada:
array: Un array de strings. Dentro del cuerpo de la función findMyKey debes escribir tu solución.

Ejemplo 1:
* Input: ["diamonds", "myKey", "spades", "AS"] Output: 1

Ejemplo 2:
* Input: ["diamonds", "hearts", "spades"] Output: false

Ejemplo 3:
* Input: ["myKey", "hearts", "spades"] Output: 0

AMPLIACIÓN : simplificarlo en una sola línea utilizando el operador ternario.

---

#### kata 19:

Dado un array de strings tu reto es retornar un string en donde cada elemento del array esté separado por comas, para solucionarlo vas a encontrar una función llamada joinString que recibe un parámetro de entrada:
words: Un array de strings. Dentro del cuerpo de la función joinString debes escribir tu solución.

Ejemplo 1:
* Input: ["amor", "sol", "piedra", "día"] Output: "amor,sol,piedra,día" solution();

Ejemplo 2:
* Input: ["diamonds", "hearts", "spades"] Output: "diamonds,hearts,spades"
---

#### kata 20:

En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:
* Input: "La forma de correr Python" Output: "la-forma-de-correr-python"

Ejemplo 2:
* Input: "La API para nunca parar de aprender" Output:"la-api-para-nunca-parar-de-aprender"

Ejemplo 3:
* Input: "Curso de arrays" Output: "curso-de-arrays"
---

#### Kata 21:

En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos, para solucionarlo vas a encontrar una función llamada mergeArrays que recibe dos parámetros de entrada:

arrayA: Un array
arrayB: Un array
Dentro del cuerpo de la función mergeArrays debes escribir tu solución.

Ejemplo 1:
* Input: [1, 2, 3], [4, 5, 6] Output: [1, 2, 3, 4, 5 , 6]

Ejemplo 2:

* Input: ["A", "B", "C"], ["D", "E", "H"] Output: ["A", "B", "C", "D", "E", "H"]
---

#### Kata 22:

En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

Para solucionarlo vas a encontrar una función llamada countWords que tiene un parámetro de entrada:

array: Un array de frases
Dentro del cuerpo de la función countWords debes escribir tu solución.

Ejemplo:

Input: [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

Output: 20

---

#### Kata 23:

OBJETIVO: Devolver el número de caracteres que tiene un texto (sin incluir espacios)

Input = "En un lugar de la mancha de cuyo nombre no quiero acordarme"
Output = 48

---

#### Kata 24:

En este desafío tienes un array de números el cual va a tener tanto números negativos como positivos y el reto es usando la función sort de JavaScript ordenarlos de mayor a menor.

Para solucionarlo vas a encontrar una función llamada sortDesc que tiene un parámetro de entrada:

numbers: Un array con números positivos y negativos.
Dentro del cuerpo de la función sortDesc debes escribir tu solución.

Ejemplo:

Input: [3, 1, 11, 5, 2, -7, 8]
Output: [ 11, 8, 5, 3, 2, 1, -7]

* AMPLIACIÓN: Devolver el array de mayor a menor y sean números pares

Input: [3, 1, 11, 5, 2, -7, 8]
Output: [8, 2] 

---

#### Kata 25:

En este desafío tienes un array con palabras, tu reto es retornar un array ordenado de la palabra con menos caracteres a la palabra con más caracteres.

Para solucionarlo vas a encontrar una función llamada sortByLength que tiene un parámetro de entrada:

words: Un array con palabras.
Dentro del cuerpo de la función sortByLength debes escribir tu solución.

Ejemplo:

Input:
[
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]

Output:
[
  "Sol",
  "Hola",
  "Viajar",
  "Aprender"
]

* AMPLIACIÓN: Ordenar igual pero solo las palabras que contengan la letra que se le pase como argumento a la función 

/*Input:
[
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]

"r"

Output:
[
  "Viajar",
  "Aprender"
]

---

#### Kata 26:

En este desafío tienes un array que contiene otros arrays internos, tu reto es retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".

Para solucionarlo vas a encontrar una función llamada flatArray que recibe un parámetro de entrada:

array: Un array que tiene otros arrays dentro
Dentro del cuerpo de la función flatArray debes escribir tu solución.

Ejemplo:

Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9]

--- 

#### Kata 27:

Tienes un array de objetos que representan personas con los siguientes atributos:

name: string
dateOfBirth: Date
Tu reto es retornar una lista con los nombres de las personas ordenadas por la fecha de nacimiento de la más reciente a la más antigua.

Para solucionarlo vas a encontrar una función llamada sortByDate que tiene un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función sortByDate debes escribir tu solución.

Ejemplo:

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
  },
  {
    name: "Santiago",
    dateOfBirth: new Date(2018, 6, 11),
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
  },
]

Output: ["Santiago", "Zulema", "Nicolas"]

* AMPLIACIÓN: Ordena por fecha de nacimiento y saca los nombres de las personas cuya longitud sea mayor al número recibido por parámetros. 

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
  },
  {
    name: "Santiago",
    dateOfBirth: new Date(2018, 6, 11),
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
  },
]
,
7

Output: ["Santiago"]

---

#### Kata 28:

Tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, tu reto es retornar ese array ordenado alfabéticamente por el apellido, para solucionarlo vas a encontrar una función llamada sortByLastName que tiene un parámetro de entrada:

array: Un array de strings.
Dentro del cuerpo de la función sortByLastName debes escribir tu solución.

Ejemplo:

Input:
[
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
]

Output:
[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
]

---

#### Kata 29:

Tienes un array de números entre positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

Para solucionarlo vas a encontrar una función llamada filterUnique que tiene un parámetro de entrada:

array: Un array de números.
Dentro del cuerpo de la función filterUnique debes escribir tu solución.

* Ejemplo 1:
Input: [3, 3, 2, 2, 1, 1]
Output: [1, 2, 3]

* Ejemplo 2:
Input: [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
Output: [ -3, -1, 1, 2, 4, 45 ]

---

#### Kata 30: 

Tienes un array de números entre positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.

Para solucionarlo vas a encontrar una función llamada counterNumbers que tiene un parámetro de entrada:

numbers: Un array de números.
Dentro del cuerpo de la función counterNumbers debes escribir tu solución.

* Ejemplo 1:
Input:
[1, 2, 2, 3, 3, 3]

Output:
{
  1: 1,
  2: 2,
  3: 3,
}

* Ejemplo 2:
Input:
[1, 2, -3, -1, 2, 4, 4, 1, 45, -1]

Output:
{
  '1': 2,
  '2': 2,
  '4': 2,
  '45': 1,
  '-3': 1,
  '-1': 2
}

---

#### Kata 31:

Tienes un array de números y tienes que agregar una nueva propiedad al final del array ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y agregar el número 4, esto me debería retornar [1, 2, 3, 4] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3].

Para solucionarlo vas a encontrar una función llamada addNumber que tiene dos parámetros de entrada:

numbers: Un array de números.
item: El número que se va a agregar.
Dentro del cuerpo de la función addNumber debes escribir tu solución.

* Ejemplo 1:
Input: [1, 2, 3], 4
Output: [1, 2, 3, 4]

* Ejemplo 2:
Input: ["A", "B"], "C"
Output: ["A", "B", "C"]

---

#### Kata 32:

Tienes un array de números y tienes que modificar un valor de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y queremos modificar la posición 0 con el valor 'change', esto me debería retornar ['change', 2, 3] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3],

Para solucionarlo vas a encontrar una función llamada updateArray que tiene dos parámetros de entrada:

array: Un array de números.
index: La posición que se quiere modificar.
newValue: El nuevo valor
Dentro del cuerpo de la función updateArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], 0, "change"
Output: ["change", 2, 3]

Ejemplo 1:

Input: ["A", "B", "C"], 1, 1
Output: ["A", 1, "C"]