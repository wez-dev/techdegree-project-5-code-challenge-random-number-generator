// 0. Access the HTML
const main = document.querySelector('main');

// 1. Collect input from a user
let lowerLimit = +prompt(`
Which number should we start generating random numbers from?
`);

const upperLimit = +prompt(`
What's the maximum random number we should generate?
`);

// 2. Convert the input to a number 
// Note: Used the uniary plus operator to convert input to numbers on input capture (see step above)

// 3. Use Math.random() and the user's number to generate a random number
// multiply random [range between 0 - <1], then increment by the lowerlimit to ensure no result is below the lower limit 
const randomNumber = Math.floor(Math.random() * upperLimit) + lowerLimit;

// 4. Create a message displaying the random number
main.innerHTML = `
<h1>Random Number Roller</h1>
<p> You rolled a random number between ${lowerLimit} and ${upperLimit} ... </p>
<p> ... and it's a <strong>${randomNumber}</strong>! </P
`;