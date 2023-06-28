/* Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date
salary: integer

Tu reto es retornar un array en los que la persona tenga en su nombre la última letra pasado como 2º argumento o contenga la letra pasada como 3er argumento.

Parámetros de la funcion: array: Un array de objetos, un string: letra, un string: letra

Input:
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

Output:
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
*/

let info = [
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
      name: "Praquita",
      dateOfBirth: new Date(1974, 10, 7),
      salary: 38000,
    }
  ];

  function person (array, string, letter) {
    return array.filter((element) => element.name.endsWith(string) || element.name.includes(letter));
  }

  person (info, "r", "e");