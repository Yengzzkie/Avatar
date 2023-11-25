let container = document.querySelector("#container");
let score = document.querySelector(".score");
let h1 = document.querySelector("h1");
let winner = document.querySelector(".winner");
let playerElement = document.querySelector(".playerElement");
let aangElement = document.querySelector(".aangElement");

let playerLifePercentage = 100;
let computerLifePercentage = 100;

const fire = document.querySelector("#fire");

fire.addEventListener("click", () => {
  //code block for player Fire button
  if (playerLifePercentage > 0 || computerLifePercentage > 0) {
    let playerChoice = "fire";
    let computerChoice = getComputerChoice();
    playerElement.textContent = `You cast ${playerChoice}`;
    aangElement.textContent = `Aang cast ${computerChoice}`;
    winner.textContent = playRound(playerChoice, computerChoice);
    if (playerLifePercentage === 0 || computerLifePercentage === 0) {
      setTimeout(() => {
        playerElement.textContent = "";
        aangElement.textContent = "";
        h1.textContent = `Game Over!`;
        winner.textContent = getWinner();
      }, 1000);
    }
  }
});

const water = document.querySelector("#water");

water.addEventListener("click", () => {
  //code block for player Water button
  if (playerLifePercentage > 0 || computerLifePercentage > 0) {
    let playerChoice = "water";
    let computerChoice = getComputerChoice();
    playerElement.textContent = `You cast ${playerChoice}`;
    aangElement.textContent = `Aang cast ${computerChoice}`;
    winner.textContent = playRound(playerChoice, computerChoice);
    if (playerLifePercentage === 0 || computerLifePercentage === 0) {
      setTimeout(() => {
        playerElement.textContent = "";
        aangElement.textContent = "";
        h1.textContent = `Game Over!`;
        winner.textContent = getWinner();
      }, 1000);
    }
  }
});

const earth = document.querySelector("#earth");

earth.addEventListener("click", () => {
  //code block for player Earth button
  if (playerLifePercentage > 0 || computerLifePercentage > 0) {
    let playerChoice = "earth";
    let computerChoice = getComputerChoice();
    playerElement.textContent = `You cast ${playerChoice}`;
    aangElement.textContent = `Aang cast ${computerChoice}`;
    winner.textContent = playRound(playerChoice, computerChoice);
    if (playerLifePercentage === 0 || computerLifePercentage === 0) {
      setTimeout(() => {
        playerElement.textContent = "";
        aangElement.textContent = "";
        h1.textContent = `Game Over!`;
        winner.textContent = getWinner();
      }, 1000);
    }
  }
});

const wind = document.querySelector("#wind");

wind.addEventListener("click", () => {
  //code block for player Wind button
  if (playerLifePercentage > 0 || computerLifePercentage > 0) {
    let playerChoice = "wind";
    let computerChoice = getComputerChoice();
    playerElement.textContent = `You cast ${playerChoice}`;
    aangElement.textContent = `Aang cast ${computerChoice}`;
    winner.textContent = playRound(playerChoice, computerChoice);
    if (playerLifePercentage === 0 || computerLifePercentage === 0) {
      setTimeout(() => {
        playerElement.textContent = "";
        aangElement.textContent = "";
        h1.textContent = `Game Over!`;
        winner.textContent = getWinner();
      }, 1000);
    }
  }
});

function getComputerChoice() {
  //generates random number and assigns computer's option, also contains animation codes for computer options
  let RNG = Math.floor(Math.random() * 4);

  if (RNG == 0) {
    let computerImage = document.querySelector(".fire");

    computerImage.classList.add("scale-image");

    setTimeout(() => {
      computerImage.classList.remove("scale-image");
    }, 1500);
    return "fire";
  } else if (RNG == 1) {
    let computerImage = document.querySelector(".water");

    computerImage.classList.add("scale-image");

    setTimeout(() => {
      computerImage.classList.remove("scale-image");
    }, 1500);
    return "water";
  } else if (RNG == 2) {
    let computerImage = document.querySelector(".earth");

    computerImage.classList.add("scale-image");

    setTimeout(() => {
      computerImage.classList.remove("scale-image");
    }, 1500);
    return "earth";
  } else {
    let computerImage = document.querySelector(".wind");

    computerImage.classList.add("scale-image");

    setTimeout(() => {
      computerImage.classList.remove("scale-image");
    }, 1500);
    return "wind";
  }
}

function playRound(playerSelection, computerSelection) {
  //major game logic, decides who wins per round
  if (
    (playerSelection === "fire" && computerSelection === "earth") ||
    (playerSelection === "earth" && computerSelection === "wind") ||
    (playerSelection === "wind" &&
      (computerSelection === "water" || computerSelection === "fire")) ||
    (playerSelection === "water" &&
      (computerSelection === "fire" || computerSelection === "earth"))
  ) {
    computerLifePercentage -= 10;
    updateLifeBars();
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "fire" &&
      (computerSelection === "water" || computerSelection === "wind")) ||
    (playerSelection === "earth" &&
      (computerSelection === "fire" || computerSelection === "water")) ||
    (playerSelection === "wind" && computerSelection === "earth") ||
    (playerSelection === "water" && computerSelection === "wind")
  ) {
    playerLifePercentage -= 10; //decrements life by 10 points
    updateLifeBars();
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "No damage done";
  }
}

function getWinner() {
  //concludes the game and displays the winner
  if (playerLifePercentage > computerLifePercentage) {
    return `Congratulations! You defeated Avatar Aang!`;
  } else if (computerLifePercentage > playerLifePercentage) {
    return `Avatar Aang Won. See you in next life.`;
  } else {
    return `Both benders fought a glorious fight!`;
  }
}

// Get references to the life bars and their inner life elements
let playerLife = document.querySelector(".player-life");
let computerLife = document.querySelector(".computer-life");

// Function to update the life bars based on player and computer scores
function updateLifeBars() {
  // Update the width of the life bars based on the calculated percentages
  playerLife.style.width = `${playerLifePercentage}%`;
  computerLife.style.width = `${computerLifePercentage}%`;
  console.log(playerLifePercentage);
  console.log(computerLifePercentage);

  if (playerLifePercentage <= 50) {
    //changes the life bars to red when it reaches 50%
    playerLife.style.backgroundColor = "red";
  } else {
    playerLife.style.backgroundColor = "green";
  }

  if (computerLifePercentage <= 50) {
    computerLife.style.backgroundColor = "red";
  } else {
    computerLife.style.backgroundColor = "green";
  }
}
