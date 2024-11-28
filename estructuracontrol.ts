/* actividad estructura de control pag.9 */
import * as readlineSync from 'readline-sync';

/* tiempo de vuelta */
let vuelta1: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 1 (en segundos): ");
let vuelta2: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 2 (en segundos): ");
let vuelta3: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 3 (en segundos): ");
let vuelta4: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 4 (en segundos): ");

/* tiempo total */
if (vuelta1 >= 0 && vuelta2 >= 0 && vuelta3 >= 0 && vuelta4 >= 0) {
    let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
    let promedioVuelta: number = tiempoTotal / 4;
    console.log("El tiempo total de las 4 vueltas es:", tiempoTotal, "segundos.");
    console.log("El promedio por vuelta es:", promedioVuelta, "segundos.");
} else {
    console.log("Por favor, ingrese valores positivos para los tiempos de las vueltas.");
}
