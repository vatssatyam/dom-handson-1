// number guesses Games
let rightNumberis = document.getElementsByClassName("guessMyNumberSymbol");
let ganeshValue = document.getElementById("userNmber");
let checkButton = document.getElementsByClassName("check");
let message = document.getElementsByClassName("message");
let counts = document.getElementsByClassName("counts");
let highScore = document.getElementsByClassName("highScore");

let randomNumber = Math.floor(Number(Math.random() * 100 + 1));
console.log(randomNumber);
let count = 100;
let Score = 0;
function check() {
  if (count != 0) {
    if (randomNumber > ganeshValue.value) {
      message[0].innerHTML = "You Guess is Low";
      console.log("You Guess is Low");
      count--;
      counts[0].innerHTML = `${count}`;
    } else if (randomNumber < ganeshValue.value) {
      message[0].innerHTML = "You Guess is High";
      console.log("You Guess is High");

      count--;
      counts[0].innerHTML = `${count}`;
    } else {
      console.log("You Guess is Right");
      message[0].innerHTML = "🥳You Guess is Right You Won🥳";

      count--;
      highScore[0].innerHTML = `${count}`;
      console.log(count);
      rightNumberis[0].innerHTML = `${count}`;
      counts[0].innerHTML = `${count}`;
      checkButton[0].style.visibility = "hidden";
    }
  } else {
    message[0].innerHTML = "Game is Over You are Loser";
  }
}
function generateRandomInteger(max) {
  return Math.floor(Number(Math.random() * 100 + 1));
}

function refresh() {
  randomNumber = Math.floor(Number(Math.random() * 100 + 1));
  let count = 100;
  let Score = 0;
  console.log(randomNumber);
  rightNumberis[0].innerHTML = `?`;
  highScore[0].innerHTML = 0;
  message[0].innerHTML = "Start guessing...";
  counts[0].innerHTML = 100;
  checkButton[0].style.visibility = "visible";
}