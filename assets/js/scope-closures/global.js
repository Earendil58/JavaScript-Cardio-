var a; // declaration
var b = 'b'; // declaramos / asignando
b = 'bb'; //readignamos
var a = 'aa' // redeclaracion 

//Global Scope
var fruit = 'apple'; //Global

function bestFruit() {
    console.log(fruit);
}

// bestFruit();

function countries() {
    country = 'Argentina';  //Global var
    console.log('este es el segundo', country);
}

countries()
console.log(country);