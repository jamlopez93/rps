

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');

function computerPlay(){
    let arr = ["piedra", "papel", "tijera"];
    let option = arr[Math.floor(Math.random() * arr.length)]
    return option
}

/*function playerPlay(){
    return window.prompt("Piedra? Papel? ó Tijera?");
}
*/
function pptRound(playerSelection, computerSelection){
    playerSelection = buttons.forEach((button) => {
        button.addEventListener('click', () => {
          return console.log(button.className);
        });
      });
    computerSelection = computerPlay();

      playerSelection === computerSelection ? "Empate"
    : playerSelection === "piedra" && computerSelection === "tijera" ? "Victoria," + " Piedra mata papel" 
    : playerSelection === "papel" && computerSelection === "piedra" ? "Victoria," + " Papel mata piedra" 
    : playerSelection === "tijera" && computerSelection === "papel" ? "Victoria," + " Tijera mata papel" 
    : playerSelection === "piedra" && computerSelection === "papel" ? "Derrota," + " Piedra pierde contra papel" 
    : playerSelection === "papel" && computerSelection === "tijera" ? "Derrota," + " Papel pierde contra tijera" 
    : "Derrota," + " Tijera pierde contra piedra" 
    
    return playerSelection === computerSelection ? "Empate"
    : playerSelection === "piedra" && computerSelection === "tijera" ? "Victoria" && playerScore++
    : playerSelection === "papel" && computerSelection === "piedra" ? "Victoria" && playerScore++
    : playerSelection === "tijera" && computerSelection === "papel" ? "Victoria" && playerScore++
    : playerSelection === "piedra" && computerSelection === "papel" ? "Derrota" && computerScore++
    : playerSelection === "papel" && computerSelection === "tijera" ? "Derrota" && computerScore++
    :  "Derrota" && computerScore++
}
;
pptRound();
/*function game(){
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
        : "Oe bobooooo perdiooooooo"
    )
}

game();
*/
