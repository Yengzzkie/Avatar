let computerScore = 0;
let playerScore = 0;
let gameRound = 0;

const rock = document.querySelector("#rock");

rock.addEventListener("click", () => {
  if (gameRound < 5) {
    let playerChoice = "rock";
    let computerChoice = getComputerChoice();
    console.log(`Player chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
    gameRound++;
    console.log(`Round ${gameRound}`);
    if (gameRound === 5) {
      console.log("Game Over!");
      console.log(
        `Final Scores - Player: ${playerScore} Computer: ${computerScore}`
      );
      console.log(getWinner(playerScore, computerScore));
    }
  }
});

const paper = document.querySelector("#paper");

paper.addEventListener("click", () => {
  if (gameRound < 5) {
    let playerChoice = "paper";
    let computerChoice = getComputerChoice();
    console.log(`Player chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
    gameRound++;
    console.log(`Round ${gameRound}`);
    if (gameRound === 5) {
      console.log("Game Over!");
      console.log(
        `Final Scores - Player: ${playerScore} Computer: ${computerScore}`
      );
      console.log(getWinner(playerScore, computerScore));
    }
  }
});

const scissors = document.querySelector("#scissors");

scissors.addEventListener("click", () => {
  if (gameRound < 5) {
    let playerChoice = "scissors";
    let computerChoice = getComputerChoice();
    console.log(`Player chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
    gameRound++;
    console.log(`Round ${gameRound}`);
    if (gameRound === 5) {
      console.log("Game Over!");
      console.log(
        `Final Scores - Player: ${playerScore} Computer: ${computerScore}`
      );
      console.log(getWinner(playerScore, computerScore));
    }
  }
});

function getComputerChoice() {
  let RNG = Math.floor(Math.random() * 3);

  if (RNG == 0) {
    return "rock";
  } else if (RNG == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "It's a tie";
  }
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `Congratulations! You beat the computer!`;
  } else if (computerScore > playerScore) {
    return `Computer Won. Better luck next time.`;
  } else {
    return `It's a tie!`;
  }
}
