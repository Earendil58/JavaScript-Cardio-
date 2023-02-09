let variableExterior = 'Menem';

function probarVariables() {
    variableExterior = 'Mingo Cavallo';

    let mensaje = 'Hola ' + variableExterior;
    console.log(mensaje);
}

console.log(variableExterior); // imprimimos la variable exterios

console.log(probarVariables());// llamamos a la funcion, que cambia el valor de la variable exterior

console.log(variableExterior); // volvemos a llamar a la variable exterior y vemos que fue cambiada por la funcion