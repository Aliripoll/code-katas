/* Tienes un array de objetos que representan personas con los siguientes atributos:
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
*/

let info = [
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
]; 

function newArray (array, string) {
  let sumSalaries = 0;
  let filteredArray = array.filter((element) => {
    if(element.name.includes(string) && element.check === false) {
      sumSalaries += element.salary;
      return element;
    }
    
  });

  return sumSalaries / filteredArray.length;
  
}


newArray (info, "r")