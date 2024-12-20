# rockpaperscissors
The Odin Project #3 - Rock Paper Scissors in Javascript Using Console


Thought process while creating project:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Set up variables to have computer choose from 1 of 3 choices

// The following function grabs a number between 0, 1, or 2 and outputs it to the log. We are going to reform it so it assigns a word to one of the three values instead
// function getRandomInt(max) {
//     return Math.floor(Math.random() * 3);
//   }

//   console.log(getRandomInt());

// const rock = 0;
// const paper = 1;
// const scissors = 2;


// We're creating a function that allows us to produce a number that can be assigned to a string. How this is done is where I'm currently stuck. 


// Taken from: https://hatchjs.com/rock-paper-scissors-in-javascript/
// However the nested ternary option is a bit convoluted and is not easily reproducible in future scenarios
// computerChoice = Math.random() < 0.5 ? "rock" : Math.random() < 0.5 ? "paper" : "scissors" ;
// reviewing further and reworking script, I was able to work out an if/else statement with assistance from AI 


// The following code more suits what has been currently addressed, using an if/else with easy explanations, I would have preferred to use decimals, but this is more accurate on providing equal weighted possibilities to the three options.


Step 3 took me some time as I was able to essentially reuse the initial if loop I created in the previous step with the help of AI but needed to place in a function. One of the biggest issues was getting the correct variable returned from the function.

Silly enough, the issue I had was that I was not placing the correct syntax. When I intended to create something that was == to the value being entered, I instead was using the assignment = value. Thus every time an input was entered, it would always return rock which was the first result in the function. 



Old function to request input from user using numbers, does not meet requirements for project, deprecated but storing here for personal reference moving forward

// Current function works on number input, changing to text input with case insensitivity
// function getHumanChoice() {
//     let userInput = prompt("Please choose one of the following: 1) rock, 2) paper, 3) scissors");
//     if (userInput == 1) {
//         userResult = 'User entry: rock';
//     }   else if (userInput == 2) {
//         userResult = 'User entry: paper';
//     }   else if (userInput == 3) {
//         userResult = 'User entry: scissors';
//     }   else {
//         userResult = "-- Error: User input invalid response, please try again.";
//     }
//     return userResult;
// }

// console.log(computerChoice);

// Step 3: Write a function logic to get the player choice

// function getHumanChoice() {
//     // adding toLowerCase to the if condition, previous attempts was adding it to prompt directly to the prompt dialogue and on the return case
//     let humanChoice = prompt("Please enter rock, paper, or scissors to begin the game.");
//     // let userInput = prompt("Please enter rock, paper, or scissors to begin");
//     if (humanChoice.toLowerCase() == 'rock') {
//         humanChoice = 'User entered: rock';
//     }
//     else if (humanChoice.toLowerCase() == 'paper') {
//         humanChoice = 'User entered: paper';
//     }
//     else if (humanChoice.toLowerCase() == 'scissors') {
//         humanChoice = 'User entered: scissors';
//     }
//     else {
//         humanChoice = '-- User entered an invalid result, please restart and try again.'
//     }

//     return humanChoice;
// }