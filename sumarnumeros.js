"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Ingresa el primer número entero: ");
var num2 = readlineSync.questionInt("Ingresa el segundo número entero: ");
if (num1 > num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
}
var suma = 0;
for (var i = num1; i <= num2; i++) {
    suma += i;
}
console.log("La suma de los n\u00FAmeros entre ".concat(num1, " y ").concat(num2, " es: ").concat(suma));
