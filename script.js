game();

function game(){
    let playerScore = 0;
    let computerScore = 0;

    // for (i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        let computerChoiceUpper = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        let playerChoiceUpper = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

        let result = playRound(computerChoice, playerChoice);
        console.log(`Round ${i+1} of 5.\n`)
        
        if (result === 0){
            playerScore += 1;
            computerScore += 1;
            console.log(`Tie! ${playerChoiceUpper} ties with ${computerChoiceUpper}`);
        }
        else if (result === 1){
            playerScore += 1;
            console.log(`You Win! ${playerChoiceUpper} beats ${computerChoiceUpper}!`);
        }
        else{
            computerScore += 1;
            console.log(`You Lose! ${computerChoiceUpper} beats ${playerChoiceUpper}!`);
        }
    }

    console.log(`The score is: \n Player - ${playerScore} \n Computer - ${computerScore}`);
//}

function getComputerChoice(){
    let choice = '';
    let number = Math.floor(Math.random() * 3) + 1;

    if (number === 1){
        choice = 'rock';
    }
    else if (number === 2){
        choice = 'paper';
    }
    else{
        choice = 'scissors';
    }
    
    return choice;
}

function getPlayerChoice(){
    let choice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();

    if (choice === 'rock' || choice === 'scissors' || choice === 'paper'){
        return choice;
    }
    else{
        alert('Incorrect choice!')
        return getPlayerChoice();
    }
}

function playRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice){
        return 0;
    }
    else if (computerChoice === 'rock' && playerChoice === 'scissors'){
        return 2;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'paper'){
        return 2;
    }
    else if (computerChoice === 'paper' && playerChoice === 'rock'){
        return 2;
    }
    else{
        return 1;
    }
}