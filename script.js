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

function getHumanChoice() {
  let human_choice = prompt("Enter your choice");
  human_choice = human_choice.toLowerCase();
  if (
    human_choice == "rock" ||
    human_choice == "paper" ||
    human_choice == "scissors"
  ) {
    return human_choice;
  } else {
    return "Wrong play.";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose. Paper beats Rock");
    return (computerScore += 1);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win. Scissors beats paper");
    return (humanScore += 1);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win. Rock beats Scissors");
    return (humanScore += 1);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose. Rock beats scissors");
    return (computerScore += 1);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win. Paper beats Rock");
    return (humanScore += 1);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose. Scissors beats Paper");
    return (computerScore += 1);
  } else if (
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
    console.log(
      "Tie game between " + humanChoice + " and " + computerChoice + "."
    );
    return;
  } else {
    return console.log("Wrong input.");
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
}
