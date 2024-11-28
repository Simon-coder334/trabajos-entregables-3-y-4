/* actividad calculo de descuento pag.8 */

/* definicion de las variables del precio inicial y porcentaje de descuento */
let precioInicial: number = 450.50; 
let descuentoPorcentaje: number = 10; 

/* descuento y precios */
let descuento: number = (precioInicial * descuentoPorcentaje) / 100;
let precioFinal: number = precioInicial - descuento;

console.log("Precio inicial:", precioInicial);
console.log("Descuento aplicado:", descuento);
console.log("Precio final:", precioFinal);

