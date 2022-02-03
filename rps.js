let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let arr = ["piedra", "papel", "tijera"];
    let option = arr[Math.floor(Math.random() * arr.length)]
    return option
}

function playerPlay(){
    return window.prompt("Piedra? Papel? ó Tijera?");
}

function pptRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerPlay().toLowerCase();
    alert( playerSelection === computerSelection ? "Empate"
    : playerSelection === "piedra" && computerSelection === "tijera" ? "Victoria," + " Piedra mata papel" 
    : playerSelection === "papel" && computerSelection === "piedra" ? "Victoria," + " Papel mata piedra" 
    : playerSelection === "tijera" && computerSelection === "papel" ? "Victoria," + " Tijera mata papel" 
    : playerSelection === "piedra" && computerSelection === "papel" ? "Derrota," + " Piedra pierde contra papel" 
    : playerSelection === "papel" && computerSelection === "tijera" ? "Derrota," + " Papel pierde contra tijera" 
    : playerSelection === "tijera" && computerSelection === "piedra" ? "Derrota," + " Tijera pierde contra piedra" 
    : "Crees que ya se lo suficiente como para poner lo que va aca y no me dañe el codigo? pues no"
    )
    return playerSelection === computerSelection ? "Empate"
    : playerSelection === "piedra" && computerSelection === "tijera" ? "Victoria" && playerScore++
    : playerSelection === "papel" && computerSelection === "piedra" ? "Victoria" && playerScore++
    : playerSelection === "tijera" && computerSelection === "papel" ? "Victoria" && playerScore++
    : playerSelection === "piedra" && computerSelection === "papel" ? "Derrota" && computerScore++
    : playerSelection === "papel" && computerSelection === "tijera" ? "Derrota" && computerScore++
    : playerSelection === "tijera" && computerSelection === "piedra" ? "Derrota" && computerScore++
    : "Crees que ya se lo suficiente como para poner lo que va aca y no me dañe el codigo? pues no"
}
;

function game(){
    pptRound(playerSelection, computerSelection)
    pptRound(playerSelection, computerSelection);
    pptRound(playerSelection, computerSelection);
    pptRound(playerSelection, computerSelection);
    pptRound(playerSelection, computerSelection);
    console.log(playerScore)
    console.log(computerScore)
    return alert(
        computerScore == playerScore ? "Empataron"
        : computerScore < playerScore ? "Ganaste!"
        : computerScore > playerScore ? "Oe bobooooo perdiooooooo"
        : "No hagas de mi vida un infierno"
    )
}

game();