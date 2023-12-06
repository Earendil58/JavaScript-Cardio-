// A small computer company has to develop an information system 
// and has a budget of x pesos to cover the costs of creating the system. 
// Knowing that it plans to earn at least 17% for the project, 
// determine what is the maximum value that the project costs can reach.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el presupuesto disponible (en pesos): ', (presupuesto) => {
    // Convertir la entrada del usuario a número
    const presupuestoNumero = parseFloat(presupuesto);

    if (isNaN(presupuestoNumero)) {
        console.log('Por favor, ingrese un número válido.');
        rl.close();
        return;
    }

    // Calcular el costo máximo del proyecto considerando un 17% de ganancia
    const costoMaximo = presupuestoNumero / (1 - 0.17);

    console.log(`El costo máximo que puede alcanzar el proyecto es: ${costoMaximo.toFixed(2)} pesos.`);
    rl.close();
});
