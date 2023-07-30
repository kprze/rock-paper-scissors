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
    let choice = prompt("Choose: Rock, Paperor Scissors").toLowerCase();

    if (choice === 'rock' || choice === 'scissors' || choice === 'paper'){
        return choice;
    }
    else{
        alert('Incorrect choice!')
        return getPlayerChoice();
    }
}