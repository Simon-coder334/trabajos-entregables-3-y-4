"use strict";
/*actividad montaña rusa pag.40 */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
/* altura para entrar */
var alturaTexto = readlineSync.question("Ingrese su altura en metros: ");
var altura = Number(alturaTexto); // Convertir el texto ingresado a número
/* condicion para entrar */
if (altura >= 1.3) {
    console.log("Puede ingresar a la montaña rusa.");
}
else {
    console.log("No puede ingresar a la montaña rusa.");
}
/*  NOTA: arreglar node que no anda */ 
