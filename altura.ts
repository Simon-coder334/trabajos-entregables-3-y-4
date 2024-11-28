/* actividad validar altura pag.? */
import * as readlineSync from 'readline-sync';

let edadTexto: string = readlineSync.question("Por favor, ingrese su edad: ");
let edad: number = Number(edadTexto);
if (edad >= 18) {
    console.log("La persona es mayor de edad.");
} else {
    console.log("La persona no es mayor de edad.");
}
