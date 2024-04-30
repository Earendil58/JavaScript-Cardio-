// class Persona {
//     nombre = ''
//     apellido = ''
//     edad = NaN

//     constructor(name, lastName, age) {
//         this.nombre = name;
//         this.apellido = lastName;
//         this.edad = age
//     }


//     presentarse() {
//         // console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
//         return `Hola, soy ${this.nombre} ${this.apellido}`;
//     }
// }

// persona1 = new Persona('Carlos', 'Menem', 101);

// persona2 = new Persona('Mingo', 'Cavallo', 88);

// console.log(persona1);
// console.log(persona1.presentarse());
// console.log(persona2);


class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        Coche.cantidadCoches++;
    }

    // Método de instancia
    obtenerDescripcion() {
        return `${this.marca} ${this.modelo}`;
    }

    // Método estático
    static contarCoches() {
        return Coche.cantidadCoches;
    }
}

// Propiedad estática
Coche.cantidadCoches = 0;

// Crear instancias de Coche
const coche1 = new Coche("Toyota", "Corolla");
const coche2 = new Coche("Honda", "Civic");

// Acceder al método de instancia
console.log(coche1.obtenerDescripcion()); // Output: Toyota Corolla

// Acceder al método estático
console.log(Coche.contarCoches()); // Output: 2
