const name = 'Charly';
let age = 101;
const hobbies = ['Convertibilidad', 'Uno a uno', 'Privatizar'];


const summarizeUser = (userName, userAge, userHobby) => {
    return (
        `The name is ${userName}, 
        the age is ${userAge}
        and the user hobbies are: ${userHobby}`
    );
}

console.log(summarizeUser(name, age, hobbies));

