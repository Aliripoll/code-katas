/* Tienes un array de objetos que representan personas con los siguientes atributos:
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
*/

let peopleInfo = [
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

function info (array, string) {
    return array
    .map(element => element.salary)
    .sort((a, b) => b - a);
};

info(peopleInfo)