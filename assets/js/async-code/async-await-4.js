// function gitCall() {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             const fetchData = fetch('https://api.github.com/users/Earendil58');
//             resolve(fetchData)
//         }, 2000)
//     });
// }

// async function callParser() {
//     const gitCallParser = await gitCall();
//     const gitConverse = await gitCallParser.json();
//     console.log(gitConverse);
// }

// function apiCall() {

//     const apiPromise = new Promise((resolve, reject) => {
//         const exito = Math.random() > 0.5;
//         const urlFetch = fetch('https://jsonplaceholder.typicode.com/todos/1');

//         if (exito) {
//             resolve(urlFetch);
//         }
//         else {
//             reject(new Error('Ups, no se pudo completar el llamado a la API'));
//         }
//     })

//     return apiPromise;
// }

// async function apiCallParser() {
//     try {
//         const urlParser = await apiCall();
//         console.log(urlParser);
//         const urlJson = await urlParser.json();
//         console.log(urlJson);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// apiCallParser();

function apiBasico2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    return new Promise((resolve, reject) => {
        if (url) {
            const fetchUrl = fetch('https://jsonplaceholder.typicode.com/todos/1');
            resolve(fetchUrl);
        }
        else {
            reject(new Error('Ups, falló la llamada a la Api'));
        }
    })
}

const apiCall = apiBasico2();

console.log(apiBasico2());

apiCall.then(
    resultado => {
        console.log(resultado);
    }
)
