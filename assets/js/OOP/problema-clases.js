const Menem = {
    nombre: 'Carlos',
    edad: 99,
    imprimir() {
        console.log(`${this.nombre} - ${this.edad}`)
    }
}

// Menem.imprimir();


function Persona(nombre, edad) {
    console.log('se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const carlos = new Persona('Menem', 99);

console.log(maria);
console.log(carlos);