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


function handleError(err) {
    console.log('oh no');
    console.log(err);
}

async function go() {

    const pizza = await makePizza(['anana'])
    console.log(pizza);
    return pizza;

}


//catch it at run time
// go().catch(handleError);

//make a safe function with a HighOrderFunction (funciones que devuelven funciones)
function makeSafe(fn, errorHandler) {
    return function () {
        fn().catch(errorHandler)
    }
}


go(); // unsafe

const safeGo = makeSafe(go, handleError) //safe