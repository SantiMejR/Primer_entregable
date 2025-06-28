let tarifaBase = 2800;
let tarifaFinal = tarifaBase;

let tipo = Number(prompt("Selecciona el tipo de pasajero:\n1. Estudiante\n2. Adulto mayor\n3. Trabajador\n4. Turista\n"));

switch (tipo) {
    case 1:
        tarifaFinal = tarifaBase * 0.5;
        break;
    case 2:
        tarifaFinal = tarifaBase * 0.6;
        break;
    case 3:
        tarifaFinal = tarifaBase;
        break;
    case 4:
        tarifaFinal = tarifaBase * 1.1;
        break;
    default:
        console.log("Tipo de pasajero no válido. Se aplicará tarifa base.");
        tarifaFinal = tarifaBase;
}

let hora = Number(prompt("Ingresa la hora del viaje (formato 24h, un solo número (Las 6 p.m seria: 18)): "));
if (hora >= 18 && hora < 21) {
    tarifaFinal = tarifaFinal * 1.1;
}

let trasbordo = Number(prompt("¿Cuántos trasbordos realizó?\n1. Un trasbordo\n2. Dos trasbordos\n3. Ninguno o más de dos"));

switch (trasbordo) {
    case 1:
        tarifaFinal = tarifaFinal - 300;
        break;
    case 2:
        tarifaFinal = tarifaFinal - 500;
        break;
    case 3:
        break;
    default:
        console.log("Opción de trasbordo no válida.");
}

if (tarifaFinal < 0) {
    tarifaFinal = 0;
}

console.log("Total a pagar: $" + Math.round(tarifaFinal));