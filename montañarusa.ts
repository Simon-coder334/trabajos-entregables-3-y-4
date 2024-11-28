/*actividad montaña rusa pag.40 */

import * as readlineSync from 'readline-sync';

/* altura para entrar */
let alturaTexto: string = readlineSync.question("Ingrese su altura en metros: ");
let altura: number = Number(alturaTexto); // Convertir el texto ingresado a número

/* condicion para entrar */
if (altura >= 1.3) {
    console.log("Puede ingresar a la montaña rusa.");
} else {
    console.log("No puede ingresar a la montaña rusa.");
} 



/*  NOTA: arreglar node que no anda */