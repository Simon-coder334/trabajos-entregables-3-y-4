import * as readlineSync from 'readline-sync';
let numero: number;
do {
    numero = readlineSync.questionInt("Ingresa un número mayor que 0: ");
} while (numero <= 0);
console.log(numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`);

/*string cambiada a number porque sino habria error en variable number para decir si es par o impar, elemento de linea 6 arreglado */

