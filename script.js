
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

// Step 3: Create function to request and input user choce
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

// let humanScore = 0;
// let computerScore = 0;



// Step 5: Write the logic to play a single round

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tied");
            return "tie";
        }
        // The following statements check if one of the 3 criteria are met, if not, then the final else statement is invoked.  The || symbols mean "or".
        else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`User wins! ${humanChoice} beats ${computerChoice}.`);
            return "player";
        }
        else {
            console.log(`User loses! ${computerChoice} beats ${humanChoice}.`);
            return "computer";
        }
    
}

// Step 6: rewrite the function to play until one reaches 5 points

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    while (playerScore < 5 && computerScore < 5) {
    //   const userInput = prompt("Enter your choice (rock, paper, or scissors):");
      const humanChoice = getHumanChoice();
      
      if (humanChoice === null) continue; // Skip invalid input and prompt again
  
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);
  
      // Update scores based on the round result
      if (result === "player") {
        playerScore++;
      } else if (result === "computer") {
        computerScore++;
      }
  
      console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
    }
  
    // Announce the final winner
    if (playerScore === 5) {
      console.log("Congratulations! You won the game!");
    } else {
      console.log("The computer wins the game. Better luck next time!");
    }
  }
  
  // Start the game
  playGame();



