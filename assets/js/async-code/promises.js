function makePizza(toppings = []) {
    const pizzaPromise = new Promise(function (resolve, reject) {

        if (toppings.includes('anana')) {
            reject('En serio?? tocá de acá');
        }

        const tiempodeCoccion = 500 + (toppings.length * 200);

        //esperamos un segundo a que la pizza esté lista
        setTimeout(function () {
            //cuando esta lista podemos resolver esta promise
            resolve(`Acá está tu 🍕 con los toppings: ${toppings.join('')}`);
        }, tiempodeCoccion);
    });
    return pizzaPromise;
}

//----------------------------------------------------------------------------------------------------------------------------------

// const pepperoniPromise = makePizza(['pepperoni']);
// const argentinaPromise = makePizza(['deudaExterna', 'inflacion', 'sueñosRotos']);

// console.log(pepperoniPromise);  //esto nos devuelve la promise de la pizza, no la pizza en si
// console.log(argentinaPromise);


// pepperoniPromise.then(function (cualquiercosa) {     //esto nos devuelve la pizza en si
//     console.log('recibido');
//     console.log(cualquiercosa);
// })

//----------------------------------------------------------------------------------------------------------------------------------

// makePizza(['peperroni'])
//     .then(function (pizza) {  //otra forma de invocar una promise
//         console.log(pizza);
//         return makePizza(['jamon', 'queso']);
//     })
//     .then(function (pizza) {
//         console.log(pizza);
//         return makePizza(['huevo', 'cheddar', 'tomate'])
//     })
//     .then(function (pizza) {
//         console.log(pizza);
//         return makePizza()
//     })
//     .then(function (pizza) {
//         console.log(pizza);
//         return makePizza(['uno', 'dos', 'tres', 'cuatro', 'cinco'])
//     })
//     .then(function (pizza) {
//         console.log(pizza);
//         return makePizza(['queso', 'anana'])
//             .then(pizza => {
//                 console.log(pizza);
//             })
//     }).catch(handleError);

//----------------------------------------------------------------------------------------------------------------------------------

// const pizzaPromise1 = makePizza(['jamon', 'queso']);
// const pizzaPromise2 = makePizza(['uno', 'dos', 'tres', 'cuatro', 'cinco', 'uno', 'dos', 'tres', 'cuatro', 'cinco']);
// const pizaPromise3 = makePizza(['huevo', 'cheddar', 'tomate']);

// const cenaPromesa = Promise.all([pizzaPromise1, pizzaPromise2, pizaPromise3]);

// cenaPromesa.then(function ([caliente, laMenemista, especial]) {

//     console.log(caliente, laMenemista, especial);

// })


// const primeraPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizaPromise3]);

// primeraPizzaPromise.then(pizza => {
//     console.log('debes tener hambre');
//     console.log(pizza);
// })

//----------------------------------------------------------------------------------------------------------------------------------

// function handleError(err) {
//     console.log(err);
// }

// makePizza(['anana'])
//     .then(pizza => {
//         console.log(pizza);
//     })
//     .catch(handleError)

//----------------------------------------------------------------------------------------------------------------------------------

function wait(ms = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    });
}

wait(2000).then(() => {
    console.log('listo!');
})