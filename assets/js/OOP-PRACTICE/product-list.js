
import { Product } from "./product.js";
import { ProductItem } from "./product-item.js";

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


    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

const producto1 = new ProductList()

producto1.render();

