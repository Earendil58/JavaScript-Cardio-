// console.log('Empezando');

// setTimeout(() => {
//     console.log('Corriendo');
// }, 2000);

// console.log('Terminando');


// function imprimirResultados(resultado) {
//     console.log(`El resultado es: ${resultado}`);
// }

// function procesarDatos(datos, callback) {
//     let resultados = datos * 2;

//     callback(resultados);
// }


// procesarDatos(5, imprimirResultados);

// const fetchData = fetch('https://api.github.com/users/Earendil58')

// function atraparError(err) {
//     return err;
// }

// fetchData
//     .then(response => {
//         if (!response) {
//             throw new Error(`La petición no funcionó correctamente: ${response.statusText}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(atraparError);

// function fetchGitHub() {
//     return fetchPromise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Datos recibidos');
//         }, 4000)
//     })
// }

// fetchGitHub()
//     .then(data => {
//         console.log(data);
//     })

// function fetchGitHub(username) {
//     return new Promise(function (resolve, reject) {
//         const url = `https://api.github.com/users/${username}`;

//         fetch(url)
//             .then(response => {
//                 if (!response) {
//                     throw new Error(`Request err: ${response.statusText}`);
//                 }
//                 resolve(response.json());
//             })
//             // .then(profileData => {
//             //     resolve(profileData.json());
//             // })
//             .catch(err => {
//                 reject(err);
//             })
//     })
// }

// fetchGitHub('Earendil58')
//     .then(data => {
//         console.log(data);
//     })


// async function hacerPizza(toppings = []) {
//     let tiempoDeCoccion = 1000 + (toppings.length * 500)

//     await setTimeout(() => {
//         return `Acá está tu pizza, tiene: ${toppings.join('-')}`
//     }, tiempoDeCoccion)
// }

// hacerPizza(['jamon', 'queso', 'huevo']);


// function basicPromise() {
//     return new Promise((resolve, reject) => {
//         const exito = false;

//         if (exito) {
//             resolve('Un exito perro');
//         }
//         else {
//             reject('Algo fallo perro');
//         }
//     });
// }

// function atrapaErrores(err) {
//     console.log(`Error capturado: ${err}`);
// }

// basicPromise()
//     .then(data => console.log(data))
//     .catch(atrapaErrores);


// function obtenerDatos(username) {
//     url = `https://api.github.com/users/${username}`;

//     return fetch(url)

// }

// async function mostrarDatos() {

//     try {
//         console.log('Obteniendo datos');
//         const datosCrudos = await obtenerDatos('Earendil58')
//         const datosProcesados = await datosCrudos.json()
//         console.log(`Datos recibidos: ${JSON.stringify(datosProcesados)}`);
//     }
//     catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// mostrarDatos();

function basisPromise() {
    return new Promise(function (resolve, reject) {
        const success = true;

        if (success) {
            resolve('The request was successful');
        }
        else {
            reject('Ops, we got an error');
        }
    })
}

async function showPromise() {
    try {
        console.log('Empezando');
        const thePromiseToResponse = await basisPromise()
        console.log('Terminando');

        console.log(thePromiseToResponse);
    }
    catch (error) {
        console.log(error);
    }
}

showPromise();
