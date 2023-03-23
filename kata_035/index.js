/* Tienes un array de objetos que representan personas con los siguientes atributos:
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
]*/

let objectInfo = 
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
  //array.sort((a,b) => a.dateOfBirth - b.dateOfBirth 
function objectNames (array) {
   return array
    .map((person) => {
        if(person.is_programmer === true) {
            person.name = person.name + " 'P'";
        }
        return person;
    })
    .sort((a,b) => a.dateOfBirth - b.dateOfBirth );

 };



objectNames(objectInfo);