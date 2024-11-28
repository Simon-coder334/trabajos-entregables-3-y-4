"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* actividad validar altura pag.41 */
var readlineSync = require("readline-sync");
var edadTexto = readlineSync.question("Por favor, ingrese su edad: ");
var edad = Number(edadTexto);
if (edad >= 18) {
    console.log("La persona es mayor de edad.");
}
else {
    console.log("La persona no es mayor de edad.");
}
