"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
// Create some grocery items
var groceries = [
    new Grocery("Milk", 2, 10.29),
    new Grocery("Bread", 4, 6.59),
    new Grocery("Eggs", 2, 9.86),
    new Grocery("Bananas", 11, 5.66),
];
exports.default = groceries;
