/* Tienes un array de objetos que representan personas con los siguientes atributos:
name: string
dateOfBirth: Date

Tu reto es retornar un array con los objetos de las personas, pero hay que añadir una propiedad a cada objeto llamada "special". El valor
de esta propiedad contendrá true si la letra pasada por argumento a la función, false en caso contrario.


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
]*/

let objectInfo = [
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

function newProperty (array, string) {
    return array.map((element) => {
        if(element.name.includes(string)) {
            element.special = true;
        } else {
            element.special = false;
        }
        return element;
    })
}


newProperty(objectInfo, "r");