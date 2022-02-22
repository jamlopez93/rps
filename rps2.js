let playerScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll('button');


function play(e){
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner);
}
function getComputerChoice(){
    let arr = ["piedra", "papel", "tijera"];
    let option = arr[Math.floor(Math.random() * arr.length)]
    return option
}

function getWinner(playerChoice, computerChoice){
      return playerChoice === computerChoice ? "Empate" 
    : playerChoice === "piedra" && computerChoice === "tijera" ? "Player" 
    : playerChoice === "papel" && computerChoice === "piedra" ? "Player"   
    : playerChoice === "tijera" && computerChoice === "papel" ? "Player"   
    : playerChoice === "piedra" && computerChoice === "papel" ? "Computer"  
    : playerChoice === "papel" && computerChoice === "tijera" ? "Computer" 
    : "Computer"   
}
console.log(playerScore, computerScore);

choices.forEach(choice => choice.addEventListener('click', play));