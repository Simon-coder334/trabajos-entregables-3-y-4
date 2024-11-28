import * as readlineSync from 'readline-sync';

function verificarClave() {
    const claveCorrecta = "eureka";

    for (let i = 0; i < 3; i++) {
        let claveIngresada = readlineSync.question("Ingresa la clave: ");
        
        if (claveIngresada === claveCorrecta) {
            console.log("Clave correcta. Acceso permitido.");
            return;
        } else {
            console.log("Clave incorrecta.");
        }
    } console.log("Has agotado todas las oportunidades.");
} verificarClave();