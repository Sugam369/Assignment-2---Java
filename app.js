// Defining the function to handle smoothie ordering
function orderSmoothie() {
    // Geting input values from the form and trim trailing whitespace
    const fruitsInput = document.getElementById('fruits').value.trim().split(',');
    const baseInput = document.getElementById('base').value.trim();
    const sweetenersInput = document.getElementById('sweeteners').value.trim().split(',');
    const toppingsInput = document.getElementById('toppings').value.trim().split(',');

    const smoothie = new Smoothie(fruitsInput, baseInput, sweetenersInput, toppingsInput);

    // Geting the description and cost of the smoothie using methods from the Smoothie class
    const description = smoothie.getDescription();
    const cost = smoothie.calculateCost();

    const outputDiv = document.getElementById('smoothieOutput');

    // Updating the inner HTML of the output div with the smoothie details using template literals
    outputDiv.innerHTML = `
        <h2>Your Smoothie</h2>
        <p>${description}</p>
        <p>Total Cost: $${cost}</p>
    `;
}
