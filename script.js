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