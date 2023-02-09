function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const crearPersonaFlecha = (nombre, apellido) => ({ nombre, apellido })


function imprimirArgumentos() {
    console.log(arguments);
}

const imprimirArgumentos2 = (...args) => {
    console.log(args);
}

const persona = crearPersona('carlos', 'menem');
console.log(persona);

const persona2 = crearPersonaFlecha('domingo', 'cavallo');
console.log(persona2);

imprimirArgumentos(true, 'hola', 15);
imprimirArgumentos2(false, 'chau', 138);

const [casado, vivo, nombre, saludo] = imprimirArgumentos2(true, 'si', 'Menem', 'Hola mundo');

console.log({ casado, vivo, nombre, saludo });