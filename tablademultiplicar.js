"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Ingresa el número para mostrar su tabla de multiplicar: ");
var hasta = readlineSync.questionInt("¿Hasta qué número quieres ver la tabla? ");
console.log("Tabla de multiplicar del ".concat(numero, ":"));
for (var i = 1; i <= hasta; i++) {
    console.log("".concat(numero, " * ").concat(i, " = ").concat(numero * i));
}
/* con la comilla unica es mas efectivo que doble comilla, linea 2 cuando se le quito se arreglo, cambio de * multiplica */
