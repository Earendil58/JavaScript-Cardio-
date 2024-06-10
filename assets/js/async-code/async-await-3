function somethingNeedsToWait() {
    return new Promise(function (resolve, reject) {
        const success = true
        if (success) {
            resolve('It was resolve with success');
        }
        else {
            reject('It was rejected');
        }
    })
}



async function readindPromise() {
    try {
        console.log('Starting');
        const promiseResponse = await somethingNeedsToWait();
        console.log('Finishing');
        console.log(promiseResponse);
    }
    catch (error) {
        console.log(error);
    }
}

readindPromise();