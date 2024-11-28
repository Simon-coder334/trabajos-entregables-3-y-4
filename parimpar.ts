let numero = parseInt(prompt("Ingresa un número:") || "0");

if (numero === 0) {
    console.log("El número es cero.");
} else if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}