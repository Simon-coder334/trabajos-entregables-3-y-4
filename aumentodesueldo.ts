function calcularAumentoSueldo(sueldoActual: number): number {
    let sueldoConAumento: number;
    if (sueldoActual <= 15000) {
        sueldoConAumento = sueldoActual * 1.20;
    } else if (sueldoActual >= 15001 && sueldoActual <= 20000) {
        sueldoConAumento = sueldoActual * 1.10;
    } else if (sueldoActual >= 20001 && sueldoActual <= 25000) {
        sueldoConAumento = sueldoActual * 1.05;
    } else {
        sueldoConAumento = sueldoActual;
    }
    return sueldoConAumento;
}
const sueldoActual = 18000;
const sueldoConAumento = calcularAumentoSueldo(sueldoActual);
console.log(`El sueldo actual es: $${sueldoActual}`);
console.log(`El sueldo con aumento es: $${sueldoConAumento.toFixed(2)}`);

/*error sin solucionar par luego, quitar y reemplazar tofixed sino no ejecuta */