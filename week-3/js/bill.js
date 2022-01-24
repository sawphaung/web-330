/*
============================================
File Name: bill.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 17, 2021
===========================================
*/
export class Bill {
    _beverages = []; 
    _appetizers = []; 
    _mainCourses = []; 
    _desserts = [];

    // Create Function and assign the value to above array
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    // Create Function and assign the value to above array
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    // Create Function and assign the value to above array
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    // Create Function and assign the value to above array
    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    // Get total value
    getTotal() {
        let total = 0;

        this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        });

        this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        });

        this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        });

        this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        });

        return total.toFixed(2);
       
    }

}