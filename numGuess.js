// first load the prompt-sync library 
const prompt = require('prompt-sync')();

// Welcome the user
console.log("Welcome to our number guessing game! ");

// declare variable to store random number
// Math.random()  generates random number between 0 and 1
// to make the number ranges from 0 to 100 use rounding and multilication by 100
const toBeGuessed = Math.round(Math.random() * 100);


console.log(toBeGuessed);
let guessCounter = 5;

while( guessCounter > 0){
    // allow the user to guess the selected random number 
    // store the users guess and compare it with the selected random number

    console.log('You have '+ guessCounter.toString() + '  chance(s) to guess the correct number!');
    let userGuess = Number(prompt('Guess a number between 0 to 100:   '));

    if(userGuess > toBeGuessed ){
        console.log(userGuess.toString() + " is greater than the number to be guessed!");
        guessCounter --;
    }else if( userGuess < toBeGuessed ){
        console.log(userGuess.toString() + " is less than the number to be guessed!");
        guessCounter --;
    }else{
        console.log("Excellent! , " + userGuess.toString() + " was the number to be guessed!");
        guessCounter --;
        break;// break out of the while loop is the user got the guess before the chance is zero.
    }
}