

function hacerPizza(toppings = []) {
    return pizzaPromise = new Promise(function (resolve, reject) {
        if (toppings.includes('anana')) {
            reject('Puajj, no le podés poner Ananá a la pizza');
        }
        const tiempoDeHorneado = 500 + (toppings.length * 200);
        setTimeout(function () {
            resolve(`Acá está tu pizza 🍕 con los toppings: ${toppings.join('-')}`);
        }, tiempoDeHorneado)
    });
}

function atraparError(err) {
    console.log(`Uh no, vos estás re mal, el error fue: ${err}`);
}

// hacerPizza(['uno', 'dos', 'tres', 'cuatro', 'cinco'])
//     .then(function (pizza) {
//         console.log(pizza);
//         return hacerPizza(['uno']);
//     })
//     .then(function (pizza) {
//         console.log(pizza);
//         return hacerPizza(['uno', 'dos']);
//     })
//     .then(function (pizza) {
//         console.log(pizza);
//     })

// const pizzaPromise1 = hacerPizza(['uno', 'dos', 'tres', 'cuatro']);
// const pizzaPromise2 = hacerPizza(['uno', 'dos']);
// const pizzaPromise3 = hacerPizza(['uno', 'dos', 'tres']);


// const pizzasListas = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]).then(resultado => {
//     console.log(resultado);
// })

const pizza1 = hacerPizza(['jamon', 'queso']);
const pizza2 = hacerPizza(['anana']);

// pizza1
//     .then(pizza => {
//         console.log(pizza);
//     })
//     .catch(atraparError)

const pizzasListas = Promise.allSettled([pizza1, pizza2])

pizzasListas.then(resultados => {
    console.log(resultados);
})