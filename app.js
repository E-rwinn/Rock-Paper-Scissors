let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToword(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "paper";
  return"Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToword(userChoice)} beats ${convertToWord(computerChoice)}. you win!`; 
}

function lose() {
    
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
   }
}

function main() {
  rock_div.addEventListener('click', function() {
    Game("r")
  })

  paper_div.addEventListener('click', function() {
    Game("p")
  })

scissors_div.addEventListener('click', function() {
    Game("s")
  })
}

main();
