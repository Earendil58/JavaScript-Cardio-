// function fetchUserData(userId) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const userData = await response.json();
//             resolve(userData);
//         }
//         catch (error) {
//             reject(error);
//         }
//     })
// }

// fetchUserData(1)
//     .then(user => {
//         console.log('User Data', user);
//     })
//     .catch(error => {
//         console.log('The error: ', error);
//     })


// const userData = fetchUserData(1)

// console.log('devolviendo: ', userData);

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Response no ok');
        }
        const userData = await response.json();
        return userData;
    }
    catch (error) {
        throw error;
    }
}

const userOne = fetchUserData(1);

console.log(userOne);