/* Tienes un array de objetos que representan personas con los siguientes atributos:
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
*/

let info = [
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
  ];

function personalInfo (array, integer, letter) {
   return array
   .filter((element) => element.name.includes(letter) && element.salary >= integer) 


/*    return array.filter((element) => 
   if (element.salary >= integer && element.name.includes(letter)) {
    return element;
   }) */
   
}

personalInfo (info, 22000, "a");