"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function verificarClave() {
    var claveCorrecta = "eureka";
    for (var i = 0; i < 3; i++) {
        var claveIngresada = readlineSync.question("Ingresa la clave: ");
        if (claveIngresada === claveCorrecta) {
            console.log("Clave correcta. Acceso permitido.");
            return;
        }
        else {
            console.log("Clave incorrecta.");
        }
    }
    console.log("Has agotado todas las oportunidades.");
}
verificarClave();
