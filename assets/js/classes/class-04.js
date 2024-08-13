class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad}`);
    }
}


const persona1 = new Persona('Menem', 101)

console.log(persona1)
persona1.saludar();

class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }
}

const empleado1 = new Empleado('Cavallo', 78, 'Ministro de economía');

console.log(empleado1);