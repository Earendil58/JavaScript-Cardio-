import { Product } from './class-cardio.js';

class ProductList {
    products = [
        new Product('Producto 1',
            'https://picsum.photos/200/300',
            9.99,
            'Some image'
        ),
        new Product('Producto 2',
            'https://picsum.photos/200/300',
            10.32,
            'Some image 2'
        ),
        new Product('Producto 3',
            'https://picsum.photos/200/300',
            5.99,
            'Some image 3'
        )
    ];

    constructor() { }


}

const listaProducts = new ProductList();

listaProducts.products.forEach(product => {
    console.log(`Mis productos: ${product.title}, ${product.imageUrl}, ${product.price}, ${product.description}`);
})

