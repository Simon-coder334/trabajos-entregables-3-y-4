/* actividad login pag.41 */

import * as readlineSync from 'readline-sync';

/* Datos registrados en el sistema */
let usuarioRegistrado = "Juan";
let contrasenaRegistrada = "claveJuan";
let usuarioIngresado = readlineSync.question("Ingrese su nombre de usuario: ");
let contrasenaIngresada = readlineSync.question("Ingrese su contraseña: ");
let mensaje = (usuarioIngresado == usuarioRegistrado) 
    ? (contrasenaIngresada == contrasenaRegistrada 
        ? "¡Login exitoso! Bienvenido " + usuarioIngresado 
        : "Contraseña incorrecta. Intente nuevamente.") 
    : "Usuario incorrecto. Intente nuevamente.";

console.log(mensaje);


