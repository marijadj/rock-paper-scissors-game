let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = function () {
  const choices = ["r", "p", "s"];
  const rndmNum = Math.floor(Math.random() * 3);
  return choices[rndmNum];
};

getComputerChoice();
//converting to a word - the r,s,p results
const convertToWord = function (letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  if (letter === "p") return "Paper";
};

//if a user wins
const win = function (user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    computer
  )}. You win! 🥳`;
  userChoice_div.classList.add("win");
  setTimeout(() => userChoice_div.classList.remove("win"), 300);
};
//if a user loses
const lose = function (user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(
    user
  )}. You lost 🥺`;
  userChoice_div.classList.add("lose");
  setTimeout(() => userChoice_div.classList.remove("lose"), 300);
  //document.getElementById(user).classList.add("lose");
};
//if its a draw
const draw = function (user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  if (userScore === computerScore) {
    result_p.innerHTML = "Its a draw. 🤔";
    //document.getElementById(user).classList.add("draw");
    userChoice_div.classList.add("draw");
    setTimeout(() => userChoice_div.classList.remove("draw"), 300);
  }
};

const game = function (userChoice) {
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
  }
};

const main = function () {
  rock_div.addEventListener("click", () => game("r"));
  //game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
};

main();
