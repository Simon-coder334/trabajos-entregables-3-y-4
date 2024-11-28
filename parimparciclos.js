"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero;
do {
    numero = readlineSync.questionInt("Ingresa un número mayor que 0: ");
} while (numero <= 0);
console.log(numero % 2 === 0 ? "".concat(numero, " es par") : "".concat(numero, " es impar"));
/*string cambiada a number porque sino habria error en variable number para decir si es par o impar, elemento de linea 6 arreglado */
