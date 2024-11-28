import * as readlineSync from 'readline-sync';

let numero: number = readlineSync.questionInt("Ingresa el número para mostrar su tabla de multiplicar: ");
let hasta: number = readlineSync.questionInt("¿Hasta qué número quieres ver la tabla? ");
console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= hasta; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
}

/* con la comilla unica es mas efectivo que doble comilla, linea 2 cuando se le quito se arreglo, cambio de signo * multiplica */
