function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  if (getRandomNumber() == 0) {
    return "rock";
  } else if (getRandomNumber() == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const resultDisplay = document.querySelector("#game-result");
  const humanScoreDisplay = document.querySelector("#human-score");
  const computerScoreDisplay = document.querySelector("#computer-score");

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === computerChoice) {
    resultDisplay.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else {
    computerScore++;
    resultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const resultDisplay = document.querySelector("#game-result");
    if (humanScore === 5) {
      resultDisplay.textContent = "Congratulations! You won the game!";
    } else {
      resultDisplay.textContent = "Sorry, you lost. The computer won the game.";
    }
    disableButtons();
  }
}

function disableButtons() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}

document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
