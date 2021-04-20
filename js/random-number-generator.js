
/**
 * Collect user input and passes params to randomNumberGen()
 * 
 * @const {number} lowerLimit     - user defined lower range limit for random number
 * @const {number} upperLimit     - user defined upper range limit for random number 
 */
function getRandomNumberLimits(){


    // Note: Used the unary plus operator to convert "3" to 3 (string to number) on input capture 
    const lowerLimit = +prompt(`
    Which number should we start generating random numbers from?
    `);

    // Note: Used the unary plus operator to convert "3" to 3 (string to number) on input capture 
    const upperLimit = +prompt(`
    What's the maximum random number we should generate?
    `);

    // Pass user defined values to the random number function
    randomNumberGen(lowerLimit, upperLimit);
}


/**
 * Generate a random number between a range set by params and return results inside <main> tag
 * 
 * @param {number} lower     - user defined lower range limit for random number
 * @param {number} upper     - user defined upper range limit for random number 
 * @const {string} main           - Access document HTML
 * @const {number} randomNumber - Random number within user defined limits
 */
function randomNumberGen(lower, upper){
    
    const main = document.querySelector('main');

    // Validate user input -- if either or are NaN return error message.
    if (isNaN(lower) || isNaN(upper) ) {
        main.innerHTML = `
        <h1>Random Number Roller</h1>
        <p> Ouch!</p>
        <p>We only roll numbers - refresh the page to try again.</p>
        `;
    }else if (upper < lower) {
        main.innerHTML = `
        <h1>Random Number Roller</h1>
        <p> Ouch!</p>
        <p>The lower limit cannot be higher than the upper limit - refresh the page to and try again.</p>
        `;
    } else {
        /* Use Math.random() and the user's lower and higher limitts to generate a random number
        * highNumber - lowNumber + 1, which represents the range of numbers you want. 
        * For example, if you wanted a number between 10 and 15, (15 - 10 + 1) gives you 6,
        * which is how many numbers to choose from (10, 11, 12, 13, 14 and 15).
        * Note: Used the unary plus operator to convert "3" to 3 (string to number) on input capture  
        */
        const randomNumber = Math.floor(Math.random() * (upper - lower + 1) ) + lower;       
        main.innerHTML = `
        <h1>Random Number Roller</h1>
        <p> You rolled a random number between ${lower} and ${upper} ... </p>
        <p> ... and it's a <strong>${randomNumber}</strong>! </p>
        `;
    }
}


getRandomNumberLimits();


