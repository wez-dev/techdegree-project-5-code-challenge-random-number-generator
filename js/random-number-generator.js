// 1. Access the HTML
const main = document.querySelector('main');

// 2. Collect input from a user
let lowerLimit = +prompt(`
Which number should we start generating random numbers from?
`);

const upperLimit = +prompt(`
What's the maximum random number we should generate?
`);

// 3. Check input -- if NaN return error message.
if (isNaN(lowerLimit) ) {
    main.innerHTML = `
    <h1>Random Number Roller</h1>
    <p> Ouch!</p>
    <p>We only roll numbers - refresh the page to try again!</p>
    `;
}else if (isNaN(upperLimit)) {
    main.innerHTML = `
    <h1>Random Number Roller</h1>
    <p> Ouch!</p>
    <p>We only roll numbers - refresh the page to try again!</p>
    `;
}else {
    // 4. Convert the input to a number 
    // Note: Used the uniary plus operator to convert input to numbers on input capture (see step 2)
    
      // 5. Use Math.random() and the user's number to generate a random number
    // multiply random [range between 0 - <1], then increment by the lowerlimit to ensure no result is below the lower limit 
    const randomNumber = Math.floor(Math.random() * upperLimit) + lowerLimit;
    
    // 4. Create a message displaying the random number
    main.innerHTML = `
    <h1>Random Number Roller</h1>
    <p> You rolled a random number between ${lowerLimit} and ${upperLimit} ... </p>
    <p> ... and it's a <strong>${randomNumber}</strong>! </p>
    `;
}