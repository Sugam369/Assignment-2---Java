// Defining a class named Smoothie
class Smoothie {
    // Constructing the method with parameters for fruits, base, sweeteners, and toppings
    constructor(fruits, base, sweeteners, toppings) {
        // Initializing instance variables with the provided values
        this.fruits = fruits;
        this.base = base;
        this.sweeteners = sweeteners;
        this.toppings = toppings;
    }

    calculateCost() {
        // Defining prices for fruits, base, sweeteners, and toppings
        const fruitPrice = 1.5;
        const basePrice = 2.0;
        const sweetenerPrice = 0.5;
        const toppingPrice = 1.0;

        // Calculating the total cost based on the lengths of arrays and respective prices
        const totalCost = (this.fruits.length * fruitPrice) +
                          (this.base.length * basePrice) +
                          (this.sweeteners.length * sweetenerPrice) +
                          (this.toppings.length * toppingPrice);

        // Returning the total cost with two decimal places
        return totalCost.toFixed(2);
    }

    getDescription() {
        // Creating a string using template literals to describe the smoothie
        return `Smoothie with ${this.fruits.join(', ')} fruits, ${this.base} base, ${this.sweeteners.join(', ')} sweeteners, and ${this.toppings.join(', ')} toppings.`;
    }
}
