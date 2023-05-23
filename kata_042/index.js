/* Tienes un array de objetos que representan personas con los siguientes atributos:
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
*/

let info = [
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
  ]

function personalInfo (array, letter) {
    let filterSalary = array
    .filter((element) =>  element.name.includes(letter))
    .map((element) => element.salary)
    
    let total = filterSalary.reduce((Accumulator, current) => Accumulator + current)


    return total / filterSalary.length;
} 


personalInfo(info, "a");