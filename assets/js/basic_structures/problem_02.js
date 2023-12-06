// Develop a program that allows to enter a word by keyboard and returns it masked, 
// showing the first and last letters, but replacing the intermediate characters by asterisks. 

// For example: if you enter the word "green" you should get "v***e".


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the word to mask it: ', (word) => {
    const enteredWord = word;

    const wordLenght = enteredWord.length

    const maskWord = enteredWord[0] + ('*'.repeat(wordLenght - 2)) + enteredWord[wordLenght - 1]

    console.log(`The mask word is ${maskWord}`);
    rl.close();
})