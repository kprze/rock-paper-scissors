let playerScore = 0;
let computerScore = 0;
const roundResult = document.querySelector('.roundResult');

game();


function game(){
    let result = 0; 
    let computerChoiceUpper = '';
    let playerChoiceUpper = '';

    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');

        // using the .forEach method to iterate through each button
        buttons.forEach((button) => {

            // and for each one add a 'click' listener
            button.addEventListener('click', () => {


                let computerChoice = getComputerChoice();
                let playerChoice = '';

                playerChoice = button.id;
                result = playRound(computerChoice, playerChoice);

                // set choice names to upper case for better text formatting
                computerChoiceUpper = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
                playerChoiceUpper = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

                gameResult(result, computerChoiceUpper, playerChoiceUpper)

                computerChoice = '';
            });
        });

};

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
};

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
};

function gameResult(result, computerChoiceUpper, playerChoiceUpper){

    const playerScoreUpdate = document.querySelector('#player');
    const computerScoreUpdate = document.querySelector('#computer');

    if (result === 0){
        playerScore += 1;
        computerScore += 1; 
        roundResult.textContent = (`Tie! ${playerChoiceUpper} ties with ${computerChoiceUpper}`);
    }
    else if (result === 1){
        playerScore += 1;
        roundResult.textContent = (`You Win! ${playerChoiceUpper} beats ${computerChoiceUpper}!`);
    }
    else{
        computerScore += 1;
        roundResult.textContent = (`You Lose! ${computerChoiceUpper} beats ${playerChoiceUpper}!`);
    }

    playerScoreUpdate.textContent = `Player: ${playerScore}`;
    computerScoreUpdate.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5){
        if (playerScore === 5){
            roundResult.textContent = 'You win the game!';
        } else if (computerScore === 5){
            roundResult.textContent = 'Computer wins the game!';
        } else {
            roundResult.textContent = 'Game is tied!';
        }
        
        resetGame();
    }


}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerChoice = '';
    result = 0;
}

// console.log(`The score is: \n Player - ${playerScore} \n Computer - ${computerScore}`);

// game();

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;

//      for (i = 0; i < 5; i++){

//         let computerChoice = getComputerChoice();
//         let playerChoice = getPlayerChoice();

//         let computerChoiceUpper = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
//         let playerChoiceUpper = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

//         let result = playRound(computerChoice, playerChoice);
//         console.log(`Round ${i+1} of 5.\n`)
        
//         if (result === 0){
//             playerScore += 1;
//             computerScore += 1;
//             console.log(`Tie! ${playerChoiceUpper} ties with ${computerChoiceUpper}`);
//         }
//         else if (result === 1){
//             playerScore += 1;
//             console.log(`You Win! ${playerChoiceUpper} beats ${computerChoiceUpper}!`);
//         }
//         else{
//             computerScore += 1;
//             console.log(`You Lose! ${computerChoiceUpper} beats ${playerChoiceUpper}!`);
//         }
//     }

//     console.log(`The score is: \n Player - ${playerScore} \n Computer - ${computerScore}`);
// }

// function getPlayerChoice(){
//     let choice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();

//     if (choice === 'rock' || choice === 'scissors' || choice === 'paper'){
//         return choice;
//     }
//     else{
//         alert('Incorrect choice!')
//         return getPlayerChoice();
//     }
// }