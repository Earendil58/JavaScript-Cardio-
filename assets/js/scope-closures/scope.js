
// const age = 100;

// function go() {
//     const age = 200; // la variable esta declarda adentro de la func, asi que la busca primero ahi. Si no la encuentra irá a un nivel superior. 
//     const hair = 'Black';
//     console.log(age);
//     console.log(hair);
// }


// go();

//------------------------------------------------------------------------------------------------------------------------------------------------------

// function isCool(name) {
//     let cool;
//     if (name === 'wes') {
//         cool = true;
//     }
//     console.log(cool);
//     return cool;
// }

// isCool('wes');

//------------------------------------------------------------------------------------------------------------------------------------------------------

// const dog = 'snickers';

// function logDog() {
//     console.log(dog);
// }

// function go() {
//     const dog = 'sunny';
//     logDog();
// }

// go();

//------------------------------------------------------------------------------------------------------------------------------------------------------

function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell();
}