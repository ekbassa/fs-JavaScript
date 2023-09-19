let randomNum = Math.floor(Math.random() * 50 ) + 1;
let userGuess = parseInt(prompt('enter number'));

if (userGuess === randomNum){
    alert(`Bingo!! your guess is correct`);
}

while(userGuess != randomNum){
    if (userGuess < randomNum){
        alert(`you guess is low`);
        userGuess = parseInt(prompt('enter number'));
        
    }
    if (userGuess > randomNum){
        alert(`you guess is high`);
        userGuess = parseInt(prompt('enter number'));
    }
}

alert(`Bingo!! your guess is correct `);
