class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola, soy un metodo');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.frase = frase;
        this.codigo = codigo;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }


}

const spiderman = new Persona('Peter parker', 'Spiderman', 'A por ellos');
const supermenem = new Persona('Carlos Menem', 'SuperMenem', 'A triunfar');
const ironman = new Persona('Mariano grondona', 'Ironman', 'Antes todo esto era campo');

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Milanga de pollo';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
console.log(Persona.mensaje());