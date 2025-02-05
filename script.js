

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


function getHumanChoice(){
    let choice = prompt("Enter rock, paper or scissors");
    console.log("Your Choice: " + choice);
    return choice.toUpperCase();
}



function playGame(){
    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log("Tie!");
            
        }else if(humanChoice == "ROCK"){ // all choices for rock
            if (computerChoice == "PAPER"){
                // case where human chooses rock and computer chooses paper
                console.log("You Lose! Paper beats rock.");
                computerScore++;
            }else{ // computer choice must be scissors then;
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
        }else if (humanChoice == "PAPER"){ // all choices for paper
            if (computerChoice == "ROCK"){
                console.log("You win!.Paper beats rock" );
                humanScore++;
            }else {
                console.log("You lose. Scissors beats paper.");
                computerScore++;
            }
        // all choices for scissors
        }else if (humanChoice == "SCISSORS"){
            if (computerChoice == "PAPER") {
                console.log("You win! Scissors beats paper.");
                humanScore++;

            } else {
                console.log("You lose. Rock beats scissors");
                computerScore++;
            }
        } else{
            console.log("Invalid entry. Please choose rock, paper, or scissors.");
        }
    }

    let count = 0;
    while (count < 5){
        let computerChoice = getComputerChoice(); 
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        count++;

    }
    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
    if (humanScore > computerScore){
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore){
        console.log("Sorry! You lost the game.");
    } else {
        console.log("It's a tie!");
    }
}

playGame();