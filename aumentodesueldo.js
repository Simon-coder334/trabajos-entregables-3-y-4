function calcularAumentoSueldo(sueldoActual) {
    var sueldoConAumento;
    if (sueldoActual <= 15000) {
        sueldoConAumento = sueldoActual * 1.20;
    }
    else if (sueldoActual >= 15001 && sueldoActual <= 20000) {
        sueldoConAumento = sueldoActual * 1.10;
    }
    else if (sueldoActual >= 20001 && sueldoActual <= 25000) {
        sueldoConAumento = sueldoActual * 1.05;
    }
    else {
        sueldoConAumento = sueldoActual;
    }
    return sueldoConAumento;
}
var sueldoActual = 18000;
var sueldoConAumento = calcularAumentoSueldo(sueldoActual);
console.log("El sueldo actual es: $".concat(sueldoActual));
console.log("El sueldo con aumento es: $".concat(sueldoConAumento.toFixed(2)));
/*error sin solucionar par luego, quitar y reemplazar tofixed sino no ejecuta */ 
