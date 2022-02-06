/* 
    Title: product.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 04, 2021
*/
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}