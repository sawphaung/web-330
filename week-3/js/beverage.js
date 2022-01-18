/*
============================================
File Name: beverage.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 17, 2021
===========================================
*/
import { Product } from "./product.js";

export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}