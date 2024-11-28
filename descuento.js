/* actividad calculo de descuento pag.8 */
/* definicion de las variables del precio inicial y porcentaje de descuento */
var precioInicial = 450.50;
var descuentoPorcentaje = 10;
/* descuento y precios */
var descuento = (precioInicial * descuentoPorcentaje) / 100;
var precioFinal = precioInicial - descuento;
console.log("Precio inicial:", precioInicial);
console.log("Descuento aplicado:", descuento);
console.log("Precio final:", precioFinal);
