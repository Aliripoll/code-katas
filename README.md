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

---

#### Kata 33:

En este desafío tienes un array de números y tienes que eliminar un elemento de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y queremos eliminar la posición 0, esto me debería retornar [2, 3] pero el array enviadá no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3]

Para solucionarlo vas a encontrar una función llamada removeFromArray que tiene dos parámetros de entrada:

array: Un array de números.
index: La posición que se quiere eliminar.
Dentro del cuerpo de la función removeFromArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], 0
Output: [2, 3]

Ejemplo 2:

Input: ["A", "B", "C"], 1
Output: ["A", "C"]

---

#### Kata 34:

Tienes un array con una lista de strings con nombres y apellidos, tu reto es retornar un array que solo contenga consonantes y que este ordenado alfabéticamente de manera 
descendente. 

array: Un array de strings.
Dentro del cuerpo de la función sortOnlyConsonants debes escribir tu solución.

Ejemplo:
Input:
[
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador",
  "héctor Forte"
]
Output:
[ 
  'ndr Prz',
  'hctr Frt',
  'Zlm Vcnt',
  'Ncls Mln',
  'Jn mdr' 
]

---

#### Kata 35: 

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
is_programmer: boolean
Tu reto es retornar un array con los objetos de las personas ordenadas por la fecha de nacimiento de la más antigua a la más reciente y 
además, si la persona es programadora, debes añadir a su atributo name la cadena de texto " 'P'"
Parámetros de la funcion: array: Un array de objetos.

Ejemplo:
Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    is_programmer: false
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    is_programmer: true
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    is_programmer: true
  },
  {
    name: "Selena",
    dateOfBirth: new Date(1954, 10, 7),
    is_programmer: false
  }
]

Output:  [
  {
    name: "Héctor 'P'",
    dateOfBirth: new Date(2018, 6, 11),
    is_programmer: true
  },
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    is_programmer: false
  },
  {
    name: "Selena",
    dateOfBirth: new Date(1954, 10, 7),
    is_programmer: false
  },
  {
    name: "Zulema  'P'",
    dateOfBirth: new Date(1994, 10, 7),
    is_programmer: true
  }
]

---
#### Kata 36:

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date

Tu reto es retornar un array con los objetos de las personas, pero hay que añadir una propiedad a cada objeto llamada "special". El valor
de esta propiedad contendrá. true si la letra pasada por argumento a la función, false en caso contrario.


Parámetros de la funcion: array: Un array de objetos y un string: letra

Ejemplo:
Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
  }
]
,
"r"

Output:  [
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    special: false
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    special: true
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    special: false
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    special: true
  }
]

---
#### Kata 37:

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock y un número de unidades, debes restar el campo "stock" las unidades.

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
        

* Ampliación:
los productos que queden con stock negativo, deben añadir una propiedad "sould_out" : true

* Ampliación 2:
los productos que queden con stock negativo deben aumentar su precio en un 10%  */

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

---

#### Kata 38:

Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar un array de objetos dónde las personas sean mayores o iguales a esas edad:

array: Un array de objetos.
edad: Entero que indica.

* Ejemplo:

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
],
22

Output:  [ 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
] 


* Ampliación 1

Debes añadir un tercer parámetro a la función que será un string con una letra, si esa letra se encuentra en el apellido de la persona, NO deberá
ser filtrado.

Ejemplo:

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
],
22,
'e'

Output:  [ 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }
] 

---

#### Kata 39:

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock y un número de unidades
La función debe hacer lo suguiente:
-  Si el stock es positivo, debemos restar "unidades" al stock original y si queda en negativo, la propiedad "special" cambiará a true.
-  Si el stock es negativo NO debemos restar el stock siempre y cuando su atributo "special" no sea true, si es true, si qué debemos restar el stock.
-  Además, debes devolver los productos ordenados por precio de mayor a menor.

Dentro de la función setStock debes escribir la solución, recibes dos parámetros de entrada:
array: array de productos
integer: unidades

* Ejemplo:
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
        ]


---

#### kata 40:

Tienes dos arrays de objetos que representan datos de productos con los siguientes atributos:name, price, stock. Debes juntar los productos de ambas tiendas.
La función debe hacer lo suguiente:
-  Si hay dos productos con el mismo nombre, ese producto debe unificarse de la siguiente manera:
    - El atributo "name" se mantiene y añadimo al final del nombre " [X]":
    - El precio debe ser la media entre ambos
    - El stock debe ser la suma entre ambos
-  Si no tiene el mismo nombre, el producto se queda como 

Debe estar ordenado por stock de MENOR a MAYOR.

Dentro de la función setProducts debes escribir la solución, recibes dos parámetros de entrada:
array: array de productos de la tienda 1
array: array de productos de la tienda 2

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
        ] 

---

#### Kata 41:

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
salary: integer

Tu reto es retornar un array con los sueldos ordenados de mayor a menor.

Parámetros de la funcion: array: Un array de objetos y un string: letra

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 21500
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000
  }
]

Output:  [38000, 24000, 21500, 15000]

** AMPLIACIÓN

Parámetros de la funcion: array: Un array de objetos, quantity

Tu reto es retornar un array con los sueldos que sean mayores que el segundo parámetro "quantity". Si son mayores, deberás
crear una propiedad nueva llamada "check" y que de valor sea la mitad del "salary"

** Ampliación 1

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 21500
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000
  }
]

Input:
[
  {
    salary: 38000,
    check: 19000

  },
  {
    salary: 24000,
    check: 12000
  }
]

** Ampliación 2

Parámetros de la funcion: array: Un array de objetos, array de names

Tu reto es retornar un array con los mismos usuarios, pero si el nombre se encuentra en el array de "names", debes
crear una nueva propiedad "checkIn" con el valor del índice en el array dónde se encuentra el nombre. Si no está
el nombre, el valor de "checkIn" debe ser null.

Input:
[
  {
    name: "Nicolás",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 21500
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000
  }
],
["Zulema", "José Luis", "Kiri", "Paco", "Juana", "Mercedes", "Héctor", "Alicia"]

Output:
[
  {
    name: "Nicolás",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000,
    checkIn: null
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000,
    checkIn: 6
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 21500,
    checkIn: 0
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000,
    checkIn: null
  }
]

---
#### Kata 42:

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
salary: integer

Tu reto es retornar la media de los sueldos de los usuarios que contengan en su nombre pasado como segundo argumento.

Parámetros de la funcion: array: Un array de objetos y un string: letra

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 21500
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000
  },
  {
    name: "Helena",
    dateOfBirth: new Date(2000, 12, 11),
    salary: 21600
  }
],
"a"

Output:  19366,66
Explicación output: (15000+21500+21600) / 3, porque solo 3 cumple la condición de tener una "a" en su atributo "name"

---

#### Kata 43:

Tienes un array de objetos que representan datos de personas con los siguientes atributos:
name: string, lastName: string, age: number. Tu reto es retornar la suma de las edades.

array: Un array de objetos.
edad: Entero que indica.

ES OBLIGATORIO HACERLO CON UN BUCLE FOR

Ejemplo:

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
]

Output: 115


*** AMPLIACION 1
Retornar la media de edad

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
]

Output: 23

***AMPLIACION 2
Recibes 2 argumentos, array con personas y un número (edad máxima). Retornar la media de edad de las personas que sean menores o iguales que el argumento "edad máxima"

Input: [ 
    { name: 'Nicolas', lastName: 'Molina', age: 18 }, 
    { name: 'Valentina', lastName: 'Molina', age: 19 }, 
    { name: 'Zulema', lastName: 'Vicente', age: 21 }, 
    { name: 'Jose Luis', lastName: 'Muñoz', age: 31 }, 
    { name: 'Pedro', lastName: 'Serrano', age: 26 }, 
],
21

Output: 19,33
---

#### Kata 44: 

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
salary: integer

Tu reto es retornar un array en los que la persona supere o iguale el sueldo y su nombre contenga la letra.

Parámetros de la funcion: array: Un array de objetos, un integer que representa el sueldo y un string: letra

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000,
    special: true
  },
  {
    name: "Héctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000,
    special: false
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 22500,
    special: true
  },
  {
    name: "Dolores",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000,
    special: false
  }
],
22000,
"a"

Output:
[
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 22500,
    special: true
  }
]

---

#### Kata 45: 

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
salary: integer

Tu reto es retornar un array en los que la persona tenga en su nombre la última letra pasado como 2º argumento o contenga la letra pasada como 3er argumento.

Parámetros de la funcion: array: Un array de objetos, un string: letra, un string: letra

***Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000,
  },
  {
    name: "Víctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000,
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 22500,
  },
  {
    name: "Paquita",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000,
  }
],
"r",
"e"

***Output:
[
  {
    name: "Víctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000,
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 22500,
  }
]

Explicación: Víctor termina en 'r' y Zulema contiene 'e'

#### Kata 46: 

Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
salary: integer
check: boolean

Tu reto es retornar un array la media de los salarios que cumplan la siguiente condición: Su nombre debe contener la letra pasada como
2º argumento y su atributo check tiene que ser false

Parámetros de la funcion: array: Un array de objetos, un string: letra

Input:
[
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
    salary: 15000,
    check: true
  },
  {
    name: "Víctor",
    dateOfBirth: new Date(2018, 6, 11),
    salary: 24000,
    check: true
  },
  {
    name: "Mercedes",
    dateOfBirth: new Date(2000, 3, 11),
    salary: 27500,
    check: false
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
    salary: 22500,
    check: true
  },
  {
    name: "Sara",
    dateOfBirth: new Date(1974, 10, 7),
    salary: 38000,
    check: false
  }
],
"r"

Output:
32750

Explicación: Mercedes y Sara cumplen  la condición, por lo tanto, 27500+38000 / 2 = 32750

---

#### Kata 47: 

Tienes un array de strings con nombres de personas

Tu reto es el último nombre que contenga la letra pasada como 2º argumento

Parámetros de la funcion: array: Un array de strings, un string: letra

Input:
["Alicia", "Diego", "José Luis", "Camila", "Alfonso", "Helena"], "s"

Output:
Alfonso


Explicación: José Luis también contiene una "s", pero el último del array es Alfonso
---

#### Kata 48:

Tu reto es devolver la suma de los índices de los nombres que contengan la letra pasada como 2º argumento

Parámetros de la funcion: array: Un array de strings, un string: letra

Input:
["Alicia", "Diego", "José Luis", "Camila", "Alfonso", "Helena"], "s"

Output:
6


Explicación: José Luis y Alfonso contienen una "s" y sus índices son 2 y 4 respectivamente, por lo tanto, 2 + 4 = 6
---

#### Kata 49:

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock 

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
--- 

#### Kata 50:

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock 

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

--- 
#### Kata 51:

Tienes un array de objetos que representan datos de productos con los siguientes atributos:name, price, stock 

La función debe hacer lo siguiente:
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

**AMPLIACIÓN 1:
La función debe hacer lo siguiente:
- Devolver solo los productos que tengan como stock un número par y además debe crear un atributo con el nombre "isEven" con el valor true.

Hazlo en otra función llamada getEvensV2()

Output:
    [
        { name: "Tablón madera", price: 1000, stock: 6, isEven: true },
        { name: "Pelacables amarillo", price: 1800, stock: 22, isEven: true }, 
        { name: "Motosierra con 6 velocidades", price: 1700, stock: 14, isEven: true }, 
    ]       


**AMPLIACIÓN 2:
La función debe hacer lo siguiente:
- Aparte de lo que hace en la función getEvensV2, añadir un ordenado descendente por el campo "stock"

Hazlo en otra función llamada getEvensV2_1()

Output:
    [
        { name: "Pelacables amarillo", price: 1800, stock: 22, isEven: true }, 
        { name: "Motosierra con 6 velocidades", price: 1700, stock: 14, isEven: true }, 
        { name: "Tablón madera", price: 1000, stock: 6, isEven: true }
    ]       

---

#### Kata 52:

Tu reto es retornar el array ordenado de manera ascendente que contengan solo números impares mayores que 20
numbers: Un array de números. Dentro del cuerpo de la función checkArray debes escribir tu solución.


Input: [-10, 1031, 34, 5, 71, 20, 19, -4, 456] 
Output: [71, 1031]


#### Kata 53:

Dado un array de strings y una letra, debes devolver el número de coindencias de esa letra. No debe distinguir entre mayúsuculas y minúsculas.

Ejemplo 1:
Input: ["amor", "sol", "piedra", "vaso"], "a"
Output: 3

Input: ["amor", "sol", "piedra", "vaso"], "V"
Output: 1

Input: ["amor", "sol", "piedra", "vaso"], "z"
Output: 0

---
#### Kata 54:

Tienes un array de arrays que contienen números naturales, tu función debe devolver solo los arrays que contengan el segundo argumento y además esa número sea impar.
Nombre función: getArraysWithArgNumber()

Ejemplo 1
Input: [[1, 44, 31, 12], [1, 450, 24], [65,10, 4, 99, 3033]], 1
Output: [[1, 44, 31, 12], [1, 450, 24]] //El 1 es impar y hay 2 arrays que lo contienen


Ejemplo 2
Input: [[1, 44, 31, 12], [1, 450, 24], [65,10, 4, 99, 3033]], 4
Output: [] //El 1 es par, por lo tanto aunque exista un array que contenga un 4, no se debe devolver nada