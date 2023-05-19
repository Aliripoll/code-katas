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


///////// AMPLIACIÓN 

/* 

Parámetros de la funcion: array: Un array de objetos, quantity

Tu reto es retornar un array con los sueldos que sean mayores que el segundo parámetro "quantity". Si son mayores, deberás
crear una propiedad nueva llamada "check" y que de valor sea la mitad del "salary"

//Ampliación 1

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
,
22000
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
*/

let secondInfo = [
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


function secondPart (array, quantity) {
  return array.filter((element) => {
    if(element.salary > quantity) {
      element.check = element.salary / 2;
      return element;
    }
  }).map((elem) => {
      return {
        salary: elem.salary,
        check: elem.check
      }
  });
}

secondPart(secondInfo, 22000)

/* 

Parámetros de la funcion: array: Un array de objetos, array de names

Tu reto es retornar un array con los mismos usuarios, pero si el nombre se encuentra en el array de "names", debes
crear una nueva propiedad "checkIn" con el valor del índice en el array dónde se encuentra el nombre. Si no está
el nombre, el valor de "checkIn" debe ser null.

//Ampliación 2

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
*/

let thirdInfo = [
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
]
let namesInfo = ["Zulema", "José Luis", "Kiri", "Paco", "Juana", "Mercedes", "Héctor", "Alicia"]


function thirdPart (array, names) {


  return array.map((element) => {
    /*if(names.indexOf(element.name) == -1) {
         element.checkIn = null;
    } else {
      element.checkIn = names.indexOf(element.name)
    }*/

    let index = names.indexOf(element.name);
    if(index == -1) {
      element.checkIn = null;
    } else {
      element.checkIn = index;
    }
    return element;
  })
}

thirdPart(thirdInfo, namesInfo);