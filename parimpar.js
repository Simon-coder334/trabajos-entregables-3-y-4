var number = parseInt(prompt("Ingresa un número:") || "0");
if (number === 0) {
    console.log("El número es cero.");
}
else if (number % 2 === 0) {
    console.log("El número es par.");
}
else {
    console.log("El número es impar.");
}
