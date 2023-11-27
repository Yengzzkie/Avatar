let container = document.querySelector("#container");
let score = document.querySelector(".score");
let gameOver = document.querySelector(".game-over");
let winner = document.querySelector(".winner");
let playerElement = document.querySelector(".playerElement");
let aangElement = document.querySelector(".aangElement");
let gameEnded = false;
let playerLifePercentage = 100;
let computerLifePercentage = 100;

function endGame() {
  gameEnded = true;
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

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
        gameOver.textContent = `Game Over!`;
        winner.textContent = getWinner();
        endGame();
      }, 1500);
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
        gameOver.textContent = `Game Over!`;
        winner.textContent = getWinner();
        endGame();
      }, 1500);
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
        gameOver.textContent = `Game Over!`;
        winner.textContent = getWinner();
        endGame();
      }, 1500);
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
        gameOver.textContent = `Game Over!`;
        winner.textContent = getWinner();
        endGame();
      }, 1500);
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
  const damage = Math.floor(Math.random() * 21);

  // game logic, decides who wins per round
  if (
    (playerSelection === "fire" && computerSelection === "earth") ||
    (playerSelection === "earth" && computerSelection === "wind") ||
    (playerSelection === "wind" &&
      (computerSelection === "water" || computerSelection === "fire")) ||
    (playerSelection === "water" &&
      (computerSelection === "fire" || computerSelection === "earth"))
  ) {
    computerLifePercentage -= damage;
    if (computerLifePercentage < 0) {
      computerLifePercentage = 0; //ensure computer life points doesn't go below 0 that may cause bug on playRound
    }

    compDamageNumber.textContent = `-${damage}`; //animates the damage on enemy healthbar

    compDamageNumber.classList.add("animate-number");

    setTimeout(() => {
      compDamageNumber.classList.remove("animate-number");
      compDamageNumber.textContent = "";
    }, 1000);

    updateLifeBars();

    if (damage >= 15) {
      return `Critical damage! You inflicted ${damage} damage points to Aang.`;
    }

    return `You Win! ${playerSelection} beats ${computerSelection}. You inflicted ${damage} damage points to Aang.`;
  } else if (
    (playerSelection === "fire" &&
      (computerSelection === "water" || computerSelection === "wind")) ||
    (playerSelection === "earth" &&
      (computerSelection === "fire" || computerSelection === "water")) ||
    (playerSelection === "wind" && computerSelection === "earth") ||
    (playerSelection === "water" && computerSelection === "wind")
  ) {
    playerLifePercentage -= damage;
    if (playerLifePercentage < 0) {
      //ensures player life points doesn't go below 0 that may cause bug on playRound
      playerLifePercentage = 0;
    }

    damageNumber.textContent = `-${damage}`; //animates the damage on player healthbar

    damageNumber.classList.add("animate-number");

    setTimeout(() => {
      damageNumber.classList.remove("animate-number");
      damageNumber.textContent = "";
    }, 1000);

    updateLifeBars();

    if (damage >= 15) {
      return `Critical damage! Aang inflicted ${damage} damage points to you.`;
    } 
    return `You Lose! ${computerSelection} beats ${playerSelection}. Aang inflicted ${damage} damage points to you.`;
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
let playerLife = document.querySelector(".health-bar");
let computerLife = document.querySelector(".comp-health-bar");
let playerLifeDamage = document.querySelector(".health-bar-red");
let playerLifeText = document.querySelector(".health-bar-text");
let damageNumber = document.querySelector(".damage-number");
let computerLifeDamage = document.querySelector(".comp-health-bar-red");
let compLifeText = document.querySelector(".comp-health-bar-text");
let compDamageNumber = document.querySelector(".comp-damage-number");

// Function to update the life bars based on player and computer scores
function updateLifeBars() {
  // Update the width of the life bars based on the calculated percentages
  playerLife.style.width = `${playerLifePercentage}%`;
  computerLife.style.width = `${computerLifePercentage}%`;
  playerLifeDamage.style.width = `${playerLifePercentage}%`;
  computerLifeDamage.style.width = `${computerLifePercentage}%`;
  playerLifeText.textContent = `${playerLifePercentage}%`;
  compLifeText.textContent = `${computerLifePercentage}%`;

  if (playerLifePercentage > 50) {
    //changes the life bars to red when it reaches 50%
    playerLife.style.backgroundColor = "green";
  } else {
    playerLife.style.backgroundColor = "rgb(255, 187, 0)";
  }

  if (computerLifePercentage > 50) {
    computerLife.style.backgroundColor = "green";
  } else {
    computerLife.style.backgroundColor = "rgb(255, 187, 0)";
  }
}
