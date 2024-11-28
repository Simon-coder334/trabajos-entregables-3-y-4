"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* actividad estructura de control pag.9 */
var readlineSync = require("readline-sync");
/* tiempo de vuelta */
var vuelta1 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 1 (en segundos): ");
var vuelta2 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 2 (en segundos): ");
var vuelta3 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 3 (en segundos): ");
var vuelta4 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 4 (en segundos): ");
/* tiempo total */
if (vuelta1 >= 0 && vuelta2 >= 0 && vuelta3 >= 0 && vuelta4 >= 0) {
    var tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
    var promedioVuelta = tiempoTotal / 4;
    console.log("El tiempo total de las 4 vueltas es:", tiempoTotal, "segundos.");
    console.log("El promedio por vuelta es:", promedioVuelta, "segundos.");
}
else {
    console.log("Por favor, ingrese valores positivos para los tiempos de las vueltas.");
}
