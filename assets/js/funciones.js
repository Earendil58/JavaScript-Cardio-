function saludar() {
    console.log('Hola mundo');
    // return 1;                      UNA FUNCION SIN RETORNO SIEMPRE DEVUELVE UNDEFINED
}

const saludar2 = function () {   //FUNCION ANONIMA: NO TIENE EL NOMBRE
    console.log('Hola mundo 2');
}

function saludar3(nombre) {
    console.log('Hola ' + nombre);
}

function saludar4(nombre) {
    console.log(arguments);
    console.log('hola ' + nombre);
}

const saludarFlecha = () => {  //FUNCION FLECHA O LAMBDA FUNCTION
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('hola ' + nombre)
}

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

const sumar3 = (a, b) => a + b;  //SI SOLO HAY UN PROCEDIMIENTO PODEMOS USAR UNA SOLA LINEA CON LAS ARROW FUNCTION

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

saludar();
saludar2();
saludar3('gonzalo');
saludar4('gonzalo2', true, 33, 'kawirpi');
saludarFlecha();
saludarFlecha2('Menem');
const probarRetorno = saludar();
console.log({ probarRetorno });
console.log(sumar(1, 2));
console.log(sumar2(2, 3));
console.log(sumar3(4, 3));
console.log(getAleatorio());
console.log(getAleatorio2());