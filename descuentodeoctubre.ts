function calcularDescuento(precioUnitario: number, cantidad: number, mes: string): number {
    let totalCompra = precioUnitario * cantidad;
    if (mes.toLowerCase() === 'octubre') {

        totalCompra *= 0.85;
    }

    return totalCompra;
}
const precioUnitario = 100; //
const cantidad = 3;
const mes = 'Octubre';
const totalConDescuento = calcularDescuento(precioUnitario, cantidad, mes);
console.log(`El total de la compra es: $${totalConDescuento.toFixed(2)}`);

/*preguntar porque aparece el .tofixed con el foco amarillo de ayuda */
