// Develop a program that, entering the two legs of a right triangle, reports:

// Value of the hypotenuse (rounded to 2 decimal places).
// Value of the major side
// Value of the minor side

// Módulo para interactuar con la consola
const readline = require('readline');

// Crear la interfaz de lectura y escritura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular la hipotenusa y los lados
function calcularTrianguloRectangulo(a, b) {
    const hipotenusa = Math.sqrt(a ** 2 + b ** 2);
    const mayorLado = Math.max(a, b);
    const menorLado = Math.min(a, b);

    return { hipotenusa: hipotenusa.toFixed(2), mayorLado, menorLado };
}


rl.question('Ingrese la longitud del primer lado: ', (ladoA) => {
    rl.question('Ingrese la longitud del segundo lado: ', (ladoB) => {

        const a = parseFloat(ladoA);
        const b = parseFloat(ladoB);


        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            console.log('Por favor, ingrese longitudes de lado válidas y mayores que cero.');
        } else {

            const resultados = calcularTrianguloRectangulo(a, b);
            console.log(`\nResultados:`);
            console.log(`- Hipotenusa: ${resultados.hipotenusa}`);
            console.log(`- Mayor lado: ${resultados.mayorLado}`);
            console.log(`- Menor lado: ${resultados.menorLado}`);
        }


        rl.close();
    });
});
