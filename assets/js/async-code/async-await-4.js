function hacerPizza() {
    return new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("It's working");
        }
        else {
            reject("Ops! Error detected");
        }
    })
}


const pizza1 = hacerPizza()

console.log(pizza1)

pizza1.then(resultado => {
    console.log(`Esto me devuelve el resultado de la promesa: ${resultado}`)
})


async function readPromise() {
    const promesa = await hacerPizza()
    console.log(`Esto es otra forma de esperar a una promesa: ${promesa}`);
}

readPromise();