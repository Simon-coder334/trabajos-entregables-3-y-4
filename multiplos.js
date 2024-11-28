var numerosVista = new Set();
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        numerosVista.add(i);
    }
}
console.log("Números múltiplos de 2 o 3 entre 1 y 100:");
numerosVista.forEach(function (num) { return console.log(num); });
/*set es usado para alamacenar numeros, & no funciona y se pudo remplazar por i y % */
