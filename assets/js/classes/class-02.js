class Persona {
    nombre = ''
    apellido = ''
    edad = NaN

    constructor(name, lastName, age) {
        this.nombre = name;
        this.apellido = lastName;
        this.edad = age
    }


    presentarse() {
        // console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
        return `Hola, soy ${this.nombre} ${this.apellido}`;
    }
}

persona1 = new Persona('Carlos', 'Menem', 101);

persona2 = new Persona('Mingo', 'Cavallo', 88);

console.log(persona1);
console.log(persona1.presentarse());
console.log(persona2);