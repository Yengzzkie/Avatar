let game = (playRound) => {
  for (let i = 0; i < 5; i++) {


    function getComputerChoice(max) { //generates a random number from 0-2 and assigns each number to rock, paper and scissors
      let RNG = Math.floor(Math.random() * max);

      if (RNG == 0) {
        return "rock";
      } else if (RNG == 1) {
        return "paper";
      } else {
        return "scissors";
      }
    }

    let playerChoice = prompt().toLowerCase(); //gets the players input/choice

    function playRound(playerSelection, computerSelection) { //compares the player and computer's choice and decide who wins
      if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
      ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

      } else {
        return "It's a tie";
      }
    }

    let playerScore = 0;

    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice(3);
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore)
  }
}

game();