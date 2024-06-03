const personaje = {
    nombre: 'Carlos Menem',
    codeName: 'El turkish',
    edad: '101',
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Menem1', 'zulemabiter', 'charlyNair'],
    direccion: {
        zip: '10800, 14852',
        ubicacion: 'La Rioja, Anillaco'
    }
}

// console.log(personaje);
// console.log('Nombre', personaje['nombre']);
// console.log('Nro de trajes de Menem: ', personaje.trajes.length);
// console.log('el ultimo traje es: ', personaje.trajes[personaje.trajes.length - 1])

personaje.propInventada = true;

const entriesPares = Object.entries(personaje);
console.log('esto es entriesPares', entriesPares);

let auto = {
    marca: 'peugeot',
    modelo: 408,
    año: 2016
}

console.log(auto);

auto.vendido = false;

console.log(auto);

Object.freeze(personaje); //esto me impide la modificacion del objeto, en cambio marcarlo como const solo impide una nueva asignacion a otro tipo, no a la mod de prop del que tengo
//congela a las propiedades hijas, pero no a las nietas, es decir a los objetos dentro del objeto. +

const propiedades = Object.getOwnPropertyNames(personaje);
console.log({ propiedades });