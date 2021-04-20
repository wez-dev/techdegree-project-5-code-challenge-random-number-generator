/**
 * @const {string} main - Access document html
 */
const main = document.querySelector('main');

/**
 * @const {string} lowerLimit - User define lower range limit for random number generator
 */
const lowerLimit = +prompt(`
Which number should we start generating random numbers from?
`);

/**
 * @const {string} upperLimit - User define upper range limit for random number generator
 */
const upperLimit = +prompt(`
What's the maximum random number we should generate?
`);


// Validate user input -- if either or are NaN return error message.

if (isNaN(lowerLimit) || isNaN(upperLimit) ) {
    main.innerHTML = `
    <h1>Random Number Roller</h1>
    <p> Ouch!</p>
    <p>We only roll numbers - refresh the page to try again.</p>
    `;
}else if (upperLimit < lowerLimit) {
    main.innerHTML = `
    <h1>Random Number Roller</h1>
    <p> Ouch!</p>
    <p>The lower limit cannot be higher than the upper limit - refresh the page to and try again.</p>
    `;
} else {
    // Use Math.random() and the user's lower and higher limitts to generate a random number
    // Note: Used the unary plus operator to convert input to numbers on input capture 

    /**
     * highNumber - lowNumber + 1, which represents the range of numbers you want. 
     * For example, if you wanted a number between 10 and 15, (15 - 10 + 1) gives you 6,
     * which is how many numbers to choose from (10, 11, 12, 13, 14 and 15).
    * @const {string} randomNumber - The random number to return
     */
    const randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) ) + lowerLimit;
    // Create a message displaying the random number
    main.innerHTML = `
    <h1>Random Number Roller</h1>
    <p> You rolled a random number between ${lowerLimit} and ${upperLimit} ... </p>
    <p> ... and it's a <strong>${randomNumber}</strong>! </p>
    `;
}