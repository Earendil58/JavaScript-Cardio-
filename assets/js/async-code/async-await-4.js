// function hacerPizza() {
//     return new Promise((resolve, reject) => {
//         const success = true;

//         if (success) {
//             resolve("It's working");
//         }
//         else {
//             reject("Ops! Error detected");
//         }
//     })
// }


// const pizza1 = hacerPizza()

// console.log(pizza1)

// pizza1.then(resultado => {
//     console.log(`Esto me devuelve el resultado de la promesa: ${resultado}`)
// })


// async function readPromise() {
//     const promesa = await hacerPizza()
//     console.log(`Esto es otra forma de esperar a una promesa: ${promesa}`);
// }

// readPromise();


// function firstPromise() {
//     const promesa = new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve('Corriendo proceso');
//         }, 2000)
//     })

//     return promesa
// }

// const promesa1 = firstPromise()

// promesa1.then(resultado => {
//     console.log(resultado);
// })

// function numeroAleatorio() {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             const numeroAleatorio = Math.floor(Math.random() * 100);
//             resolve(numeroAleatorio)
//         }, 1000)
//     })
// }

// const numeroRandom = numeroAleatorio();

// numeroRandom.then(resultado => {
//     console.log(`Este es el primer resultado: ${resultado}`)
//     return resultado * 2
// })
//     .then(resultado => {
//         console.log(`Este es el segundo resultado: ${resultado}`);
//         return resultado * 2
//     })
//     .then(resultado => {
//         console.log(`Este es el segundo resultado: ${resultado}`);
//         return resultado * 2
//     })

// function promesa3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.5) {
//                 resolve('La promesa se resolvió exitosamente');
//             }
//             else {
//                 reject(new Error('La promesa fue rechazada'));
//             }
//         }, 1000)
//     })
// }


// // const averiguarExito = promesa3()

// // averiguarExito.then(resultado => {
// //     console.log(resultado)
// // })
// //     .catch(err => { console.log(err) });

// async function manejarPromesa3() {
//     const leerPromesa3 = await promesa3();
//     console.log(`Acá estoy leyendo la promesa 3: ${leerPromesa3}`);
// }

// manejarPromesa3();

function promesa4() {
    const promiseArray = new Promise((resolve, reject) => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        if (array) {
            resolve(array);
        }
        else {
            reject('No hay array');
        }
    })

    return promiseArray
}

const arrayPromesa = promesa4();

arrayPromesa.then(result => {
    const resultadoReduce = result.reduce((acc, num) => acc + num, 0);
    console.log(resultadoReduce);
})