/* 
    Title: validator.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 12, 2022
    Reference: 
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {

    //  Assign each of the properties an empty array
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // Validate
    validate() {
        for(let validator of this.validators) {
            if(!validator.validate()) {
                 this.messages.push(validator.getMessage());
                 return false;
            }
        }
        return true;
    }
}


