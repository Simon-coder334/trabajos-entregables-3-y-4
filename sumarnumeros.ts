import * as readlineSync from 'readline-sync';

let num1: number = readlineSync.questionInt("Ingresa el primer número entero: ");
let num2: number = readlineSync.questionInt("Ingresa el segundo número entero: ");
if (num1 > num2) 
    { let temp = num1;
    num1 = num2;
    num2 = temp;
}let suma = 0;
for (let i = num1; i <= num2; i++) {
    suma += i;
}console.log(`La suma de los números entre ${num1} y ${num2} es: ${suma}`);
