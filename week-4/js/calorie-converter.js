/* 
    Title: calories-converter.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Jan 24, 2021
    References: 
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
        - https://www.geeksforgeeks.org/how-to-create-static-variables-in-javascript/
        - https://javascript.info/static-properties-methods
        - https://www.geeksforgeeks.org/how-to-implement-a-filter-for-objects-in-javascript/
*/

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
    
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fires", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),  
        new FoodModel(1013, "Orange", 45),
    ]

    static find(item) {
    return this.data.filter(element => element.name.toLowerCase() == item);
 
    }
}

