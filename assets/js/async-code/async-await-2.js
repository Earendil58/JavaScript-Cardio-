async function wait(ms = 200) {
    return new Promise((resolve) => {
        setInterval(resolve, ms);
    })
}

// async function go() {
//     console.log('empezando');
//     await wait(2000);
//     console.log('terminando');
// }

// go();


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

async function pedirComida() {
    console.log('haciendo las pizzas');
    const pizzaPromise1 = hacerPizza(['uno', 'dos']);
    const pizzaPromise2 = hacerPizza(['uno', 'dos', 'tres']);

    const pizzasListas = await Promise.all([pizzaPromise1, pizzaPromise2]);

    console.log(pizzasListas);
    console.log('pizza lista');
}


pedirComida();

