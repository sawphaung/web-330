/* 
    Title: float-min-field.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 12, 2022
*/

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    
    // validate
    validate() {
        if (parseFloat(this.field) > this.min) return true; // Using Shorthand 

        // if(parseFloat(this.field) > this.min) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

     // Display message
    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}!`
    }
}