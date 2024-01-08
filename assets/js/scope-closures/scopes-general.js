

// function cosa() {
//     let scope_funcion = 'soy un scope de funcion';
//     console.log(scope_funcion);
// }


// function bloque(tipoBloque) {
//     if (tipoBloque === 'blockScope') {
//         let blockScope = 'Soy un scope de bloque';
//         console.log(blockScope)
//     }

//     console.log('acá llamo nuevamente al scope de bloque:', blockScope);
// }

// // console.log(bloque('blockScope'));


// // function funcionExterior() {
// //     let externaVariable = "Soy externa";

// //     function funcionInterior() {
// //         console.log(externaVariable);
// //     }

// //     funcionInterior();  // Imprime: Soy externa
// // }

// // funcionExterior();


// // letglobalVar = 'global';

// // function outerFunction() {
// //     var outerVar = 'outer';

// //     function innerFunction() {
// //         var innerVar = 'inner';

// //         // Lookup de 'innerVar': encontrado en el ámbito local de innerFunction
// //         console.log(innerVar); // 'inner'

// //         // Lookup de 'outerVar': no encontrado en innerFunction, encontrado en outerFunction
// //         console.log(outerVar); // 'outer'

// //         // Lookup de 'globalVar': no encontrado en innerFunction ni en outerFunction, encontrado en el ámbito global
// //         console.log(globalVar); // 'global'
// //     }

// //     innerFunction();
// // }

// // outerFunction();

// let globalVariable = "Soy global";

// function outerFunction() {
//     let outerVariable = "Soy externa";

//     function innerFunction() {
//         let innerVariable = "Soy interna";
//         console.log(innerVariable);       // Imprime: Soy interna
//         console.log(outerVariable);       // Imprime: Soy externa
//         console.log(globalVariable);      // Imprime: Soy global
//     }

//     innerFunction();
//     // No se puede acceder a innerVariable aquí, pero sí se puede acceder a outerVariable y globalVariable
//     console.log(outerVariable);           // Imprime: Soy externa
//     console.log(globalVariable);          // Imprime: Soy global
// }

// outerFunction();
// // No se puede acceder a outerVariable o innerVariable aquí, pero sí se puede acceder a globalVariable
// console.log(globalVariable);              // Imprime: Soy global

let globalVariable = "Soy global";

function outerFunction() {
    let outerVariable = "Soy externa";

    function innerFunction() {
        let innerVariable = "Soy interna";
        console.log(innerVariable);       // Imprime: Soy interna
        console.log(outerVariable);       // Imprime: Soy externa
        console.log(globalVariable);      // Imprime: Soy global
    }

    innerFunction();

    console.log(outerVariable);           // Imprime: Soy externa
    console.log(globalVariable);          // Imprime: Soy global
}

outerFunction();

console.log(globalVariable);              // Imprime: Soy global
