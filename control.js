"use strict";
/* actividad login pag.41 */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
/* Datos registrados en el sistema */
var usuarioRegistrado = "Juan";
var contrasenaRegistrada = "claveJuan";
var usuarioIngresado = readlineSync.question("Ingrese su nombre de usuario: ");
var contrasenaIngresada = readlineSync.question("Ingrese su contraseña: ");
var mensaje = (usuarioIngresado == usuarioRegistrado)
    ? (contrasenaIngresada == contrasenaRegistrada
        ? "¡Login exitoso! Bienvenido " + usuarioIngresado
        : "Contraseña incorrecta. Intente nuevamente.")
    : "Usuario incorrecto. Intente nuevamente.";
console.log(mensaje);
