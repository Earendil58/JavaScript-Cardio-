class Coche {
    constructor(modelo, marca, año) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año
    }

    imprimirValor() {
        const vehiculo = `Tu auto es un ${this.modelo}, marca: ${this.marca} del año: ${this.año}`;
        return vehiculo
    }
}

const auto1 = new Coche(207, 'Peugeot', 2011);

console.log(auto1.imprimirValor());