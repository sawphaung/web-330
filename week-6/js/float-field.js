/* 
    Title: float-field.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 12, 2022
*/

export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    // Validate
    validate() {
        if (!isNaN(parseFloat(this.field))) {
            return true;
        }
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}!`;
    }
}