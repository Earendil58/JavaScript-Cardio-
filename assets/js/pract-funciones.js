function sumar(a, b) {   // FUNCION CLASICA
    return a + b
}


sumaDeLosPrimeros = sumar('casa', 2);
console.log('%c Esta es una funcion clasica: ', 'font-weight:bold; color: yellow', sumaDeLosPrimeros);

//------------------------------------------------------------------------------------------------------------------------

function restar(a, b) {
    console.log('%c funcion sin return, se muestra por consola: ', 'font-weight:bold; color:yellow', a - b);                  //FUNCION SIN RETURN, DEVUELVE UNDEFINED (por mas que tenga console.log, no es devolver nada, solo mostrar en consola)
}

resta = restar(1, 2);
console.log(resta);

//------------------------------------------------------------------------------------------------------------------------


const multiplicar = function (a, b) {
    return a * b
}

console.log('%c funcion anónima', 'font-weight:bold; color: yellow', multiplicar(2, 3));

//------------------------------------------------------------------------------------------------------------------------

function saludar(nombre) {
    console.log('%c esto imprime los argumentos por consola', 'font-weight:bold; color:yellow', arguments);
    return 'hola ' + nombre;
}

console.log(saludar('Gonzalo', 1, true));

//------------------------------------------------------------------------------------------------------------------------

const funcionFlecha = () => {
    return 'esto es una funcion flecha';  //ESTA ES UNA FUNCION FLECHA
}

console.log(funcionFlecha());

//------------------------------------------------------------------------------------------------------------------------

const sumarFlecha = (a, b) => {
    return a + b;
}

console.log(sumar(2, 3));

//------------------------------------------------------------------------------------------------------------------------

const funcFlechaEnUnaLinea = (a, b) => a * b;  //SI ES UNA SOLA LINEA DE CODIGO SE PUEDE RESUMIR ASI

console.log(funcFlechaEnUnaLinea(2, 3));