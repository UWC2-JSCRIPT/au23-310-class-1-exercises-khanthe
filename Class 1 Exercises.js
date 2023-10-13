/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;

let smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2) ** 2 ); // Math.pow((SMALL_PIZZA_DIAMETER / 2), 2)
let largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER / 2) ** 2 ); 

console.log(`Small pizza area: ${smallPizzaArea}`);
console.log(`Large pizza area: ${largePizzaArea}`);


// 2. What is the cost per square inch of each pizza?
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;

let smallPizzaCostPerSqIn = '$' + parseFloat(SMALL_PIZZA_PRICE / smallPizzaArea).toFixed(2);
let largePizzaCostPerSqIn = '$' + parseFloat(LARGE_PIZZA_PRICE / largePizzaArea).toFixed(2);

console.log(`Small pizza cost per sq. inch: ${smallPizzaCostPerSqIn}`);
console.log(`Large pizza cost per sq. inch: ${largePizzaCostPerSqIn}`);


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

function drawCard(){
    const LOW_CARD = 1;
    const HIGH_CARD = 13;
    return Math.ceil(Math.random() * HIGH_CARD);
}


// 4. Draw 3 cards and use Math to determine the highest
// card

let card1 = drawCard();
let card2 = drawCard();
let card3 = drawCard();

console.log(`Card 1: ${card1}`);
console.log(`Card 2: ${card2}`);
console.log(`Card 3: ${card3}`);

let highCard = Math.max(card1, card2, card3);

console.log('Highest card: ', highCard);


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = `Nick`;
let lastName = `Rohde`;
let streetAddress = `4545 15th Ave NE`;
let city = `Seattle`;
let state = `WA`;
let zipCode = `98105`;

let addressBlock = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`;

console.log(addressBlock);


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let firstNameFromBlock = addressBlock.slice(0, addressBlock.indexOf(' '));

console.log(`First Name: ${firstNameFromBlock}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

const startDateMsSinceEpoch = startDate.getTime();
const endDateMsSinceEpoch = endDate.getTime();

//console.log(`Start date: ${startDateMsSinceEpoch}, End date: ${endDateMsSinceEpoch}`);

const dateDiff = ( ( endDateMsSinceEpoch + startDateMsSinceEpoch ) / 2 );
const middleDate = new Date(dateDiff);

console.log(`Middle date: ${middleDate}`);
