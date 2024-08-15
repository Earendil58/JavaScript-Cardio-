class Rectangulo {

    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto
    }

    calculoArea() {
        console.log(`El area es ${this.ancho * this.alto}`)
    }

}

const rectangulo = new Rectangulo(10, 12)

rectangulo.calculoArea();