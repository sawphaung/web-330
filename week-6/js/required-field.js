/* 
    Title: required-field.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 12, 2022
*/

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // Check string or not
    validate () {
        if (typeof this.field === "string") {
            return Boolean(this.field);
        }
    }

    // Display message
    getMessage() {
        return `${this.name} is a required field.`;
    }
}