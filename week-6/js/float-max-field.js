/* 
    Title: float-max-field.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 12, 2022
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    // Validate
    validate() {
        if (parseFloat(this.field) < this.max) return true; // Using Shorthand 
        // if(parseFloat(this.field) < this.max) {
        //     return true;
        // } else {
        //     return false;
        // }        
    }

     // Display message
    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}!`
    }
}
