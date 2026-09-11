class Product {
    name: string;
    price: number;
    pId: number;
    incart: boolean;
    isordered: boolean;

    constructor(name: string, price: number, pId: number) {
        this.name = name;
        this.price = price;
        this.pId = pId;
        this.incart = false;
        this.isordered = false;
    }

    addToCart() {
        this.incart = true;
    }

    buyProduct(): string {
        if (this.incart) {
            this.isordered = true;

            return `Product: ${this.name}, Price: ${this.price}, ID: ${this.pId} is ordered`;
        } else {
            return `No product in cart`;
        }
    }
}

var product = new Product("Samsung", 10000, 101);

product.addToCart();

console.log(product.buyProduct());
var product = new Product("i phone", 20000, 102);

// product.addToCart();

// console.log(product.buyProduct());
console.log(product.name)
console.log(product.price)