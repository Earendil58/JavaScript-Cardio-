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

function numeroAleatorio() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            const numeroAleatorio = Math.floor(Math.random() * 100);
            resolve(numeroAleatorio)
        }, 1000)
    })
}

const numeroRandom = numeroAleatorio();

numeroRandom.then(resultado => {
    console.log(`Este es el primer resultado: ${resultado}`)
    return resultado * 2
}).then(resultado => {
    console.log(`Este es el segundo resultado: ${resultado}`);
    return resultado * 2
});