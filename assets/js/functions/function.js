const square = function (x) {
    return x * x
};

console.log(square(4));


function upper(sentence) {
    return sentence.toUpperCase();
}

console.log(upper(`I'm a sentence`))


// FUNCTION SCOPE

function something() {
    const name = 'Carlos';
    var city = 'Anillaco' // FUNCTION SCOPE // Not accessible from outside 
    console.log(`My name is: ${name}`)


    if (name === 'Carlos') {
        let lastname = 'Menem' // BLOCK SCOPE
        console.log(`The lastname is: ${lastname}`);
    }
}

something();

