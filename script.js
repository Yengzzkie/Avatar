let game = (playRound) => {
  
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {

    function getComputerChoice(max) { //generates a random number from 0-2 (0 inclusive) and assigns each number to rock, paper and scissors
      let RNG = Math.floor(Math.random() * max);

      if (RNG == 0) {
        return "rock";
      } else if (RNG == 1) {
        return "paper";
      } else {
        return "scissors";
      }
    }

    let playerChoice = prompt().toLowerCase(); //gets the players input/choice and transforms characters to lowercase
    

    function playRound(playerSelection, computerSelection) { //compares the player and computer's choice and decide who wins

      if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || //condition block where player loses
        (playerSelection === "scissors" && computerSelection === "rock")
      ) {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || //condition block where player wins
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
      } else {
        return "It's a tie"; //player and computer ties
      }
    }

    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice(3);
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore)
  }

  function getWinner() {
    if (playerScore > computerScore) {
      return `Congratulations! You beat the computer!`;
    } else if (computerScore > playerScore) {
      return `Computer Won. Better luck next time.`;
    } else {
      return `It's a tie!`;
    }
  }
   console.log(getWinner());
}


game();