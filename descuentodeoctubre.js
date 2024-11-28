function calcularDescuento(precioUnitario, cantidad, mes) {
    var totalCompra = precioUnitario * cantidad;
    if (mes.toLowerCase() === 'octubre') {
        totalCompra *= 0.85;
    }
    return totalCompra;
}
var precioUnitario = 100; //
var cantidad = 3;
var mes = 'Octubre';
var totalConDescuento = calcularDescuento(precioUnitario, cantidad, mes);
console.log("El total de la compra es: $".concat(totalConDescuento.toFixed(2)));
/*preguntar porque aparece el .tofixed con el foco amarillo de ayuda */
