console.log(this);
console.log(window);


this.nombre = 'Contexto global';
this.camello = 'coffee';

console.log(this.camello);

function imprimir() {
    console.log(this.nombre);
}

imprimir();


const obj = {
    nombre: "Contexto Objeto",
    imprimir: function () {
        console.log(this.nombre);
    }
}

obj.imprimir();

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir
}

obj2.imprimir();


const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {
        console.log(this.nombre, 3333);
    }
}

obj3.imprimir();


function Persona(nombre) {
    this.nombre = nombre;
    // return console.log(this.nombre);
    // return function () {
    //     console.log(this.nombre);
    // }
    return () => { console.log(this.nombre) };
}

let jon = new Persona('Jon');

jon();