
import { Product } from "./product.js";

class ProductList {
    constructor() { }

    products = [
        new Product(
            'Producto 1',
            'https://picsum.photos/200',
            'Some desc 1',
            10.99
        ),
        new Product(
            'Producto 2',
            'https://picsum.photos/200',
            'Some desc 2',
            9.95
        ),
        new Product(
            'Producto 3',
            'https://picsum.photos/200',
            'Some desc 3',
            6.65
        )
    ];
}

const listaUno = new ProductList();

listaUno.products.forEach(product => {
    console.log(`Titulo: ${product.title}`);
    console.log(`Foto: ${product.image}`);
    console.log(`Precio: ${product.price}`);
    console.log(`Descripcion: ${product.description}`);
});
