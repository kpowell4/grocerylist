
class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Create some grocery items
const groceries: Grocery[] = [
    new Grocery("Milk", 2, 10.29),
    new Grocery("Bread", 4, 6.59),
    new Grocery("Eggs", 2, 9.86),
    new Grocery("Bananas", 11, 5.66),

  
];

export default groceries;
