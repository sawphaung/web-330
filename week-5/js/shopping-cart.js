/* 
    Title: shopping-cart.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 04, 2021
    Reference: 
    -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
    -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/

export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // Return Product Length
    count(){
        return this.products.length;
    }

    // Add Product to Products Array
    add(product){
        this.products.push(product);
    }

    *[Symbol.iterator]() {
        for(let product of this.products) {
            yield product;
        }
    }
}