// UI
document.body.style.backgroundColor = "#FFF2F2";
let header = document.createElement("div");
// header:

header.textContent = "Rock Paper Scissors Game";
header.style.color = "#2D336B";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.marginBottom = "20px";
document.body.appendChild(header);

// container:
let container = document.createElement("div");
let scores = document.createElement("div");
let btnRock = document.createElement("button")
let btnPaper = document.createElement("button");
let btnScissors = document.createElement("button");
let winLoseDisplay = document.createElement("div");
let displayResult = document.createElement("div");

// button style:
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
btnRock.style.borderRadius = "10px";
btnPaper.style.borderRadius = "10px";
btnScissors.style.borderRadius = "10px";
btnRock.style.borderColor = "#7886C7"
btnPaper.style.borderColor = "#7886C7"
btnScissors.style.borderColor = "#7886C7"


// scores style:
scores.textContent = "0 : 0";
scores.style.border = "1px solid #A9B5DF";
scores.style.padding = "4px";

winLoseDisplay.textContent = "Choose a option";






// container style:
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.gap = "8px";

displayResult.style.display = "flex";
displayResult.style.flexDirection = "column";
displayResult.style.alignItems = "center"
displayResult.style.gap = "8px";
displayResult.style.margin = "20px";

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

displayResult.appendChild(scores);
displayResult.appendChild(winLoseDisplay);
document.body.appendChild(displayResult);
document.body.appendChild(container);



let count = 0;


// Global variables for human and computer score
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = Math.floor(Math.random() *3) + 1;
    if (choice == 1) {
        return "ROCK";
    }else if( choice == 2){
        return "SCISSORS";
    }else{
        return "PAPER";
    }
}




function playGame(){

    function playRound(humanChoice){
        let msg = ""
        let computerChoice = getComputerChoice();
        count++;
        if (humanChoice == computerChoice){
            msg = "Tie!"
            
        }else if(humanChoice == "ROCK"){ // all choices for rock
            if (computerChoice == "PAPER"){
                // case where human chooses rock and computer chooses paper
                msg = "You Lose! Paper beats rock.";
                computerScore++;
            }else{ // computer choice must be scissors then;
                msg = "You win! Rock beats scissors.";
                humanScore++;
            }
        }else if (humanChoice == "PAPER"){ // all choices for paper
            if (computerChoice == "ROCK"){
                msg = "You win!.Paper beats rock";
                
                humanScore++;
            }else {
                msg = "You lose. Scissors beats paper.";
                computerScore++;
            }
        // all choices for scissors
        }else if (humanChoice == "SCISSORS"){
            if (computerChoice == "PAPER") {
                msg = "You win! Scissors beats paper.";
                humanScore++;

            } else {
                msg = "You lose. Rock beats scissors";
                computerScore++;
            }
        } else{
            msg = "Invalid entry. Please choose rock, paper, or scissors.";
        }
        winLoseDisplay.textContent = msg;
        console.log(count);
        if (count == 5){
            let resultMsg = "";
            if (humanScore > computerScore){
                resultMsg = "Congratulations! You won the game!";
            } else if (humanScore < computerScore){
                resultMsg = "Sorry! You lost the game.";
            } else {
                resultMsg = "It's a tie!";
            }
            winLoseDisplay.textContent = resultMsg;
            humanScore = 0;
            computerScore = 0;
            count = 0;
        }
        scores.textContent = + humanScore + " : " + computerScore;

    } 
    btnRock.addEventListener("click", () => {
        playRound("ROCK");
    });

    btnPaper.addEventListener("click", () => {
        playRound("PAPER");
    });

    btnScissors.addEventListener("click", () => {
        playRound("SCISSORS");
    });
    

}


playGame();

