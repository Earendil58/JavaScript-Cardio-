let juegos = ['juego1', 'juego2', 'juego3'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr })
});

juegos.push('juego4');

console.log(juegos)

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log('esto es juegos borrados', juegosBorrados)