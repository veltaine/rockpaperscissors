
// ---------------- Project guidelines and code ----------------

// Step 1 is in the HTML file, to ensure the external script file here is accessible and able to output into that file

// Step 2: Write logic to get the computer choice
let computerChoice;
const random = Math.random();

if (random < 1 / 3) {
  computerChoice = "Computer entry: rock";
} else if (random < 2 / 3) {
  computerChoice = "Computer entry: paper";
} else {
  computerChoice = "Computer entry: scissors";
}

// console.log(computerChoice);

// Step 3: Write logic to get the player choice

function getHumanChoice() {
    let userInput = prompt("Please choose one of the following: 1) rock, 2) paper, 3) scissors");
    if (userInput == 1) {
        userResult = 'User entry: rock';
    }   else if (userInput == 2) {
        userResult = 'User entry: paper';
    }   else if (userInput == 3) {
        userResult = 'User entry: scissors';
    }   else {
        userResult = "-- Error: User input invalid response, please try again.";
    }
    return userResult;
}

// Step 4: Declare the players score variables

let humanScore = 0;
let computerScore = 0;



// creating the output results here
console.log(computerChoice,"\n",getHumanChoice());


