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



function wait(ms = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    });
}

async function go() {
    console.log('Starting');
    await wait(2000);
    console.log('running');
    await wait(2000);
    console.log('ending');
}

// go();


//------------------------------------------------------------------------------------------------------------------------------------------------

// //function declaration
// async function fd() { }

// //arrow function
// const arrowFn = async () => { }

// //callback
// window.addEventListener('click', async function () { })

// //method
// const person = {
//     sayHi: async function () {

//     },
//     //method shorthand
//     async sayHello() {

//     },

//     //function property 
//     sayHey: async () => {

//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------

async function makeDinner() {
    const pizzaPromise1 = makePizza(['pepperoni']);
    const pizzaPromise2 = makePizza(['mushrooms']);
    const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
    console.log(pep, mush);
}


makeDinner();