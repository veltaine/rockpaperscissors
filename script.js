
// ---------------- Project guidelines and code ----------------

// Step 1 is in the HTML file, to ensure the external script file here is accessible and able to output into that file

// Step 2: Write a function logic to get the computer choice


function getComputerChoice() {
    let computerChoice;
    const random = Math.random();

    if (random < 1 / 3) {
        computerChoice = "rock";
    } 
    else if (random < 2 / 3) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}   

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

function getHumanChoice() {
    const humanChoice = prompt("Please enter a choice: rock, paper, scissors");
    // using || to create or statements
    if (humanChoice === 'rock' || 'paper' || 'scissors') {
        return humanChoice.toLowerCase();
    }
    else {
        console.log("Please input rock, paper, or scissors");
        return null;
    }
}

// Step 4: Declare the players score variables
// getHumanChoice() rewritten to accept text input instead of a number

let humanScore = 0;
let computerScore = 0;



// Step 5: Write the logic to play a single round

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    for (let i = 0; i < 5; i++) {
        if (humanSelection === computerSelection) {
            console.log("Tied");
        }
        // The following statements check if one of the 3 criteria are met, if not, then the final else statement is invoked.  The || symbols mean "or".
        else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`User wins! ${humanChoice} beats ${computerChoice}.`);
        }
        else {
            console.log(`User loses! ${computerChoice} beats ${humanChoice}.`);
        }
    }
    return computerScore;
    return humanScore;

}

playRound(humanSelection, computerSelection);
// console.log("Computer chose:", getComputerChoice(), "\n", "Computer score: ", computerScore, "\n", "Human chose:", getHumanChoice(), "\n", "Human score: ", humanScore);
// creating the output results here
// console.log(getComputerChoice(),"\n",getHumanChoice());


