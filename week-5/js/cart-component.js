/* 
    Title: cart-component.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 04, 2021
*/
class CartComponent extends HTMLElement {
    constructor() {
        super();   
    }

    connectedCallback() {
        this.innerHTML = `
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
        `;
     }
}

customElements.define("cart-component", CartComponent);

