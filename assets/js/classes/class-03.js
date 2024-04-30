// class Persona {
//     constructor(nombre, edad) {
//         // Propiedades públicas
//         this.nombre = nombre;
//         this.edad = edad;

//         // Método para obtener el nombre (público)
//         this.getNombre = function () {
//             return this.nombre;
//         };

//         // Método para establecer la edad (público)
//         this.setEdad = function (nuevaEdad) {
//             this.edad = nuevaEdad;
//         };

//         // Método privado
//         mensajePrivado = function () {
//             console.log("Este es un mensaje privado");
//         };
//     }
// }

// // Crear una instancia de Persona
// const persona1 = new Persona("Juan", 30);

// // Acceder a las propiedades públicas y métodos públicos
// console.log(persona1.nombre); // Juan
// persona1.setEdad(35);
// console.log(persona1.edad); // 35

// // Acceder al método privado (no es accesible)
// persona1.mensajePrivado(); // Esto dará un error


class Persona {
    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    getNombre() {
        return this.#nombre;
    }

    setEdad(edad) {
        this.#edad = nuevaEdad;
    }

    #mensajePrivado() {
        console.log('Este es un mensaje privado');
    }

    getMensajePrivado() {
        return this.#mensajePrivado();
    }

}

const persona1 = new Persona('Carlos', 35);
console.log(persona1);


console.log(persona1.getMensajePrivado());
