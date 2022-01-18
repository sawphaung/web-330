/*
============================================
File Name: appertizer.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 17, 2021
===========================================
*/
import { Product } from "./product.js";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}