//Variables

let playerScore = 0;
let computerScore = 0;
let computerScoreboard = document.getElementById('pc');
let playerScoreboard = document.getElementById('human');
const choices = document.querySelectorAll('button');
const div = document.createElement('div')

//Funcions 

function play(e){
  const playerChoice = e.target.id;
  const computerChoice = computerPlay();
  const winner = decideWinner(playerChoice, computerChoice);
  getScore(winner);
}

function computerPlay(){
  const arr = ["piedra", "papel", "tijera"];
  const option = arr[Math.floor(Math.random() * arr.length)]
  return option
}

function decideWinner(playerChoice, computerChoice){
  return playerChoice === computerChoice ? "Empate" 
    : playerChoice === "piedra" && computerChoice === "tijera" ? "Player" 
    : playerChoice === "papel" && computerChoice === "piedra" ? "Player"   
    : playerChoice === "tijera" && computerChoice === "papel" ? "Player"   
    : playerChoice === "piedra" && computerChoice === "papel" ? "Computer"  
    : playerChoice === "papel" && computerChoice === "tijera" ? "Computer" 
    : "Computer"   
}

function getScore(winner){
  if (winner === 'Player'){
    playerScore++;
    playerScoreboard.innerHTML = playerScore;
  } else if (winner === 'Computer'){
    computerScore++;
    computerScoreboard.innerHTML = computerScore;
  } else{
    alert("It's a draw");
  }
  if (playerScore === 5){
    alert("Ganaste");
  } else if (computerScore === 5){
    alert ("Perdiste")
  }
  if (playerScore === 5){
    alert("Felicidades, derrotaste a la malvada computadora");
  } else if (computerScore === 5){
    alert("No todos nacemos con el don para presionar botones correctamente, perdiste")
  }
  if (playerScore === 5){
    restartGame();
  } else if (computerScore === 5){
    restartGame();
  }
}

function restartGame(){
  computerScore = 0;
  playerScore = 0; 
  computerScoreboard.innerHTML = 0;
  playerScoreboard.innerHTML = 0;
}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));

