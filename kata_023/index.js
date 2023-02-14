/* OBJETIVO: Devolver el número de caracteres que tiene un texto (sin incluir espacios)

Input = "En un lugar de la mancha de cuyo nombre no quiero acordarme"
Output = 48
 */

let phrase = "En un lugar de la mancha de cuyo nombre no quiero acordarme";

function countLetters(array) {
   return array.replaceAll(" ", "").length;
}

countLetters(phrase);

