

function cosa() {
    let scope_funcion = 'soy un scope de funcion';
    console.log(scope_funcion);
}


function bloque(tipoBloque) {
    if (tipoBloque === 'blockScope') {
        let blockScope = 'Soy un scope de bloque';
        console.log(blockScope)
    }

    console.log('acá llamo nuevamente al scope de bloque:', blockScope);
}

// console.log(bloque('blockScope'));


function funcionExterior() {
    let externaVariable = "Soy externa";

    function funcionInterior() {
        console.log(externaVariable);
    }

    funcionInterior();  // Imprime: Soy externa
}

funcionExterior();
