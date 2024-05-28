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


function hacerPizza(toppings = []) {
    return pizzaPromise = new Promise((resolve, reject) => {
        tiempoDeCoccion = 1000 + (toppings.length) * 1000
        setTimeout(function () {
            resolve(`Acá está tu pizza, tiene: ${toppings.join('-')}`)
        }
            , tiempoDeCoccion)
    })
}

hacerPizza(['jamon', 'queso'])
    .then(data => {
        console.log(data);
    })