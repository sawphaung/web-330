/* 
    Title: finance-calculator.js
    Author: Professor Krasso
    Modified by: Saw Phaung
    Date: Feb 12, 2022
    References: 
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
        - https://www.w3schools.com/jsref/jsref_tofixed.asp
*/

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculateFuture (monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;

        let presentValue = monthlyPayment * months;

        let futureValue = presentValue * (Math.pow(interestRate, months));

        return futureValue.toFixed(2);
    }

    static covertToCurrency (field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
    }

   
}