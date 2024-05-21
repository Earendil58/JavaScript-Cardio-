// console.log('casa' === 'casa' ? 'si' : 'no');  //operador ternario

// console.log(typeof ('5' - 1));
// console.log(8 * null);
// console.log(typeof ('5' + 1));
// console.log('five' * 2);
// console.log(null == undefined);
// console.log(null == 0);
// console.log(!false);

// let one = 1, two = 2;
// console.log(one + two);

// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function countBy(x, n) {
//     let z = [];
//     contador = x
//     while (contador <= n) {
//         z.push(x + x);
//         contador++;
//     }

//     return z;
// }

// console.log(countBy(2, 5));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 1; i <= 100; i++) {

//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log('FizzBuzz')
//     }

//     else if (i % 5 === 0 && i % 3 != 0) {
//         console.log('Buzz')
//     }

//     else if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//     else {
//         console.log(i);
//     }

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// var size = 98; //this is the variable setting

// var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

// for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
//     for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
//         if ((x + y) % 2 == 0)
//             board += " ";
//         else
//             board += "#";
//     }
//     board += "\n";
// }

// console.log(board);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function cuadrado(x) {
//     return x * x;
// }

// console.log(cuadrado(2));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let stackSize = 10;

// function getPosition(cards, stackSize) {
//     console.log(cards.length);
//     return cards.length === stackSize;
// }

// console.log(getPosition(stack, stackSize));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function doctorize(name){
//     return `Dr. ${name}`;
// }

// function yell(name){
//     return `HEY ${name.toUpperCase()}`;
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function multiplesOfThreeAndFive(number) {
//     let contador = 0;
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0) {
//             contador += i;
//         }
//         else if (i % 5 === 0) {
//             contador += i
//         }
//     }
//     return contador;
// }

// console.log(multiplesOfThreeAndFive(1000));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function fibonacciEven(number) {
//     let contador = 0;
//     let fibonacciPar = 0;
//     for (let i = 0; i <= number; i++) {
//         contador += i;
//         if (contador % 2 === 0) {
//             fibonacciPar += contador;
//         }
//     }

//     return fibonacciPar;
// }

// console.log(fibonacciEven(4_000_000));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const add = (a, b = 3) => a + b;

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// const makeABaby = (first, last) => ({name: `${first} ${last}`,age:0}); //SI LE PONEMOS EL PARÉNTESIS AL PRINCIPIO LA ARROW FUNCTION NO SE CONFUNDE Y CREE QUE LOS CORCHETES SON EL CUERPO DE LA FUNCION

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const nombre = 'carlos';
// const apellido = 'menem';

// const superHeroe = { nombre, apellido };

// console.log(superHeroe);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const peaks = ["Tallac", "Ralston", "Rose"];
// const canyons = ["Ward", "Blackwood"];
// const tahoe = [...peaks, ...peaks];

// console.log(tahoe);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const array1 = ['uno', 'dos', 'tres'];
// const [array2] = [...array1].reverse(); //con esto no alteramos el array1

// console.log(array2);



// console.log(array2);
// console.log(array1);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const array = ['a', 'b', 'c', 'd'];

// const [primero, ...otros] = array;

// console.log(otros);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function directions(...args) {
//     let [start, ...remaining] = args;
//     let [finish, ...stops] = remaining.reverse();
//     console.log(`drive through ${args.length} towns`);
//     console.log(`start in ${start}`);
//     console.log(`the destination is ${finish}`);
//     console.log(`stopping ${stops.length} times in between`);
// }



// directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const getFakePerson = async () => {
//     let res = await fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=30");
//     let { results } = res.json();
//     console.log(results);
// };


// getFakePerson();

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const messages = [
//     "They can be inserted into arrays",
//     message => console.log(message),
//     "like variables",
//     message => console.log(message)
// ];


// messages[1](messages[0]);
// messages[3](messages[2]);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const insideFn = function (logger) {
//     logger("They can be sent to other functions as arguments");
// };


// insideFn(message => console.log(message));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const createScream = function (logger) {
//     return function (message) {
//         logger(message.toUpperCase() + "!!!");
//     };
// };


// const scream = createScream(message => console.log(message));
// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(3, console.log);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function greaterThan(n) {
//     return m => m > n;
// }


// let greaterThan10 = greaterThan(10);


// console.log(greaterThan10(11));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function unless(test, then) {
//     if (!test) then();
// }

// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is even");
//     });
// });

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "PartyPink" }];

// console.log(list);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const frederick = {
//     name: "Frederick Douglass",
//     canRead: false,
//     canWrite: false
// };


// const selfEducate = person => ({ // esta es una funcion pura
//     ...person,
//     canRead: true,
//     canWrite: true,

// });

// console.log(selfEducate(frederick));
// console.log(frederick);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function Header(text) {
//     let h1 = document.createElement("h1");
//     h1.innerText = text;
//     document.body.appendChild(h1);
// }
// Header("Header() caused side effects");

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const array = [1, 2, 3, 4, 5];

// console.log(array.map(x => x * 2));

// console.log(array);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];


// const highSchools = schools.map(school => ({ name: school }));

// console.log(highSchools);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const ages = [21, 18, 42, 40, 64, 63, 34];


// const maxAge = ages.reduce((max, age) => {
//     console.log(`${age} > ${max} = ${age > max}`);
//     if (age > max) {
//         return age;
//     } else {
//         return max;
//     }
// }, 0);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const invokeIf = (condition, fnTrue, fnFalse) =>
//     condition ? fnTrue() : fnFalse();


// const showWelcome = () => console.log("Welcome!!!");

// const showUnauthorized = () => console.log("Unauthorized!!!");


// invokeIf(true, showWelcome, showUnauthorized);
// invokeIf(false, showWelcome, showUnauthorized);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const userLogs = userName => message =>
//     console.log(`${userName} -> ${message}`);

// const log = userLogs("grandpa23");

// log("attempted to load 20 fake members");

// getFakeMembers(20).then(
//     members => log(`successfully loaded ${members.length} members`),
//     error => log("encountered an error loading members")
// );

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const edad = [21, 10, 18, 47, 101, 37, 35, 115];

// const edadMaxima = edad.reduce((max, edad) => {
//     console.log(`${edad} > ${max} = ${edad > max}`);
//     return edad
//     // if (edad > max) {
//     //     return edad;
//     // } else {
//     //     return max;
//     // }
// }, 0)

// console.log("maxAge", edadMaxima);


//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const ages = [21, 10, 18, 47, 101, 37, 35, 115];

// const max = ages.reduce((max, value) => (value > max ? value : max), 0);

// console.log("edad máxima", max);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const countdown = (value, fn) => {
//     fn(value);
//     return value > 0 ? countdown(value - 1, fn) : value;
// };
// countdown(10, value => console.log(value));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function fizzBuzz(first, last) {
//     for (let i = first; i <= last; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 == 0) {
//             console.log('Fizz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz');
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z);
//     // → 60
// }
// // y is not visible here
// console.log(x + z);
// // → 40

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function cosa() {
//     setTimeout(() => {
//         console.log('hola desde el timeout')
//     }, 2500)
// }

// cosa();

// function intervalo() {
//     setInterval(() => {
//         let i = 0;
//         i++
//         console.log(i)
//     }, 1500)
// }

// intervalo();

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function paperwork(n, m) {
//     if ((n > 0) && (m > 0)) {
//         return n * m;
//     } else {
//         return 0;
//     }

// }

// console.log(paperwork(5, 25))
// console.log(paperwork(-5, -15))
// console.log(paperwork(-5, 5))


// function paperwork2(n, m) {
//     if ((n && m) > 0) {
//         return n * m;
//     } else {
//         return 0;
//     }
// };

// console.log(paperwork2(-5, 5))

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function hola(nombre, callback) {
//     setTimeout(function () {
//         console.log('Hola ' + nombre);
//         callback();
//     }, 2000);
// }

// function adios(nombre, otroCallback) {
//     setTimeout(() => {
//         console.log('adios ' + nombre);
//         otroCallback();
//     }, 1000);
// }


// console.log('inicio');
// hola('Menem', function () {
//     adios('Carlos', function () {
//         console.log('Terminando proceso async');
//     })
// });
// console.log('fin');

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function hola(nombre, callback) {
//     setTimeout(function () {
//         console.log('Hola ' + nombre);
//         callback();
//     }, 2000);
// }

// function hablar(callbackHablar) {
//     setTimeout(() => {
//         console.log('Blablabla');
//         callbackHablar();
//     }, 1000)
// }

// function adios(nombre, otroCallback) {
//     setTimeout(function () {
//         console.log('adios ' + nombre);
//         otroCallback();
//     }, 1000);
// }

// function conversacion(nombre, veces, callback) {
//     if (veces > 0) {
//         hablar(function () {
//             conversacion(nombre, --veces, callback);
//         });
//     } else {
//         adios(nombre, callback);
//     }
// }


// console.log('inicio');

// hola('Carlos', function (nombre) {
//     conversacion(nombre, 3, function () {
//         console.log('Proceso terminado');
//     });
// });




// hola('Menem', function () {
//     hablar(function () {
//         adios('Carlos', function () {
//             console.log('Terminando proceso async');
//         });
//     });
// });
// console.log('fin');

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function hola(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('Hola ' + nombre);
//             resolve(nombre);
//         }, 2000);
//     });
// }

// function hablar(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Blablabla');
//             // resolve(nombre);
//             reject('Hay un error con la function hablar');
//         }, 1000);
//     });
// }

// function adios(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('adios ' + nombre);
//             resolve(nombre);
//         }, 1000);
//     });
// }



// console.log('Iniciando el proceso');
// hola('carlos')
//     .then(hablar)
//     .then(adios)
//     .catch(error => console.log(error));
// console.log('Finalizando el proceso');

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// async function hola(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('Hola ' + nombre);
//             resolve(nombre);
//         }, 2000);
//     });
// }

// function hablar(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Blablabla');
//             resolve(nombre);
//             reject('Hay un error con la function hablar');
//         }, 1000);
//     });
// }

// function adios(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('adios ' + nombre);
//             resolve(nombre);
//         }, 1000);
//     });
// }


// async function main() {
//     let nombre = await hola('Menem');
//     await hablar();
//     await hablar();
//     await hablar();
//     await adios(nombre);
//     console.log('Fin');
// }

// console.log('Inicio');
// main();

//------------------------------------------------------------------------------------------------------------------------------------------------------------


// const f = function createHelloWorld() {
//     return (function hello() {
//         return "Hello World"
//     })()
// }


// console.log(f());

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function padre() {

//     const x = 10;

//     function hijo() {
//         console.log(x);
//     }

//     return hijo;

// }

// const miFuncion = padre();

// miFuncion();

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function greeting(msg) {
//     return function who(name) {
//         console.log(`${msg}, ${name}`)
//     }
// }

// const hello = greeting('Hello');

// hello('kyle');


//------------------------------------------------------------------------------------------------------------------------------------------------------------


// function counter(step = 1) {
//     let count = 0;
//     return function increaseCount() {
//         count = count + step;
//         return count;
//     };
// }

// let incBy1 = counter(1)

// console.log(incBy1());
// console.log(incBy1());

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function exterior() {
//     const variableExterior = 'Hey! soy la variable exterior';
//     return function interior() {
//         const variableInterior = 'Hey! soy la variable interior';
//         console.log(variableInterior);
//         console.log(variableExterior);
//     }
// }

// const fnInterior = exterior();

// fnInterior();


//------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Page {
//     constructor(text) {
//         this.text = text;
//     }

//     print() {
//         console.log(this.text);
//     }
// }

// class Notebook {
//     constructor() {
//         this.pages = [];
//     }

//     addPage(text) {
//         var page = new Page(text);
//         this.pages.push(page);
//     }

//     print() {
//         for (let page of this.pages) {
//             page.print();
//         }
//     }
// }

// var mathNotes = new Notebook();
// mathNotes.addPage("Arithmetic: + - * / ...");
// mathNotes.addPage("Trigonometry: sin cos tan ...");

// mathNotes.print();

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Animal {

//     constructor(animal, sonido, compPositivo, compNegativo) {
//         this.animal = animal;
//         this.sonidoAnimal = sonido;
//         this.comportamientoPositivo = compPositivo;
//         this.comportamientoNegativo = compNegativo;
//     }


//     elAnimalHace() {
//         return (`El ${this.animal} hace: ${this.sonidoAnimal}`)
//     }

// }

// class Perro extends Animal {

//     elPerroHace() {
//         return `el ${this.animal}, hace ${this.sonidoAnimal}, tiene un comportamiento positivo ${this.comportamientoPositivo} y un negativo ${this.comportamientoNegativo}`
//     }

// }

// const perro1 = new Perro('perro1', 'guauPuto', 'fidelidad', 'muerde');

// console.log(perro1);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function classroom(teacher) {
//     return function study() {
//         console.log(`${teacher} says to study ${this.topic}`);
//     }
// }

// const maestro = classroom('Kyle');

// var homework = {
//     topic: "JS",
//     maestro: maestro
// }

// homework.maestro();

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// array = [1, 3, 5, 7, 9, 10];

// evenArray = [];
// oddArray = [];


// for (let elemento of array) {
//     if (elemento % 2 === 0) {
//         evenArray.push(elemento);
//     }
//     else {
//         oddArray.push(elemento)
//     }

// }

// if (evenArray.length > 1) {
//     console.log('Its an even Array');
// }
// else {
//     console.log('Its an odd Array');
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function creaFuncion() {
//     var variableExterna = "¡Hola, soy externa!";

//     function muestraMensaje() {
//         console.log(variableExterna);
//     }

//     return muestraMensaje;
// }

// // Crear una función a través de creaFuncion
// var miClosure = creaFuncion();

// // Llamar a la función creada
// miClosure(); // Imprimirá: ¡Hola, soy externa!

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// // JavaScript
// const num1 = parseFloat(prompt("Ingrese el primer número:"));
// const num2 = parseFloat(prompt("Ingrese el segundo número:"));
// const num3 = parseFloat(prompt("Ingrese el tercer número:"));

// let mayor = num1;

// if (num2 > mayor) {
//     mayor = num2;
// }

// if (num3 > mayor) {
//     mayor = num3;
// }

// console.log("El mayor número es: " + mayor);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const deportes = ['futbol', 'basquet', 'golf'];

// console.log(deportes.map(deporte => {
//     return `Deporte: ${deporte.toUpperCase()}`;
// }));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const number = 14;

// number = 15 // ESTO NO SE PUEDE, PORQUE ES UN VALOR PRIMITIVO, Y NO ES POSIBLE REASIGNAR UNA CONSTANTE. SE ALMACENAN DIRECTAMENTE EN LA UBICACION DE LA MEMORIA ASIGNADA

// console.log(number); 

// const primerArray = [1, 2, 3];

// primerArray[1] = 7;

// console.log(primerArray); // ESTO ES VALIDO PORQUE SE PASA POR REFERENCIA A LA UBICACION EN MEMORIA

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// const deportesActuales = ['futbol', 'basquet', 'golf'];

// console.log(deportesActuales);

// deportesActuales.push('teto');

// console.log(deportesActuales);

// const nuevosDeportes = [...deportesActuales];

// console.log('esto es nuevosDeportes', nuevosDeportes);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// function toArray(...args) {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4, 5, 6, 7));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

const persona = {
    nombre: 'Charly',
    apellido: 'Menem',
    edad: 101,
    hobbies: ['convertibilidad', 'privatizar', '1 a 1'],
    glorySlang() {
        return `Soy el gran ${this.nombre} ${this.apellido}`;
    }
}

// console.log(persona.glorySlang());
// console.log(persona.nombre);
// console.log(persona.apellido);

const { nombre, apellido, edad } = persona;

console.log(nombre);
console.log(edad);
console.log(apellido);












