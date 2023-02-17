/* Tienes un array de objetos que representan personas con los siguientes atributos:

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

Output: ["Santiago", "Zulema", "Nicolas"] */

let info = [
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

function sortByDate(array) {
    return array
        .sort((a, b) => b.dateOfBirth - a.dateOfBirth)
        .map(person => person.name);
}

sortByDate(info);

//AMPLIACIÓN: Ordena por fecha de nacimiento y saca los nombres de las personas cuya longitud sea mayor al número recibido por parámetros. 

/*Input:
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

Output: ["Santiago"] */


let names = [
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
  ];


function searchByNames(name, nameLength) {
    return name
    .sort((a, b) => b.dateOfBirth - a.dateOfBirth)
    .filter(person => person.name.length > nameLength)
    .map(person => person.name);

}

searchByNames(names, 7);