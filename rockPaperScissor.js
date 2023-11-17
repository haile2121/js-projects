// first load the prompt-sync library 
const prompt = require('prompt-sync')();

// Welcome the user
console.log("Welcome to Rock, Paper and Scissor game ! ");

// Define variables to store number of wins , losses and ties
let palyersWins = 0;
let computersWins = 0;
let ties = 0;

// For the 3 choices below as array elements, we have to generate random selection by the computer using index 0,1,2
const choices = ['rock' , 'paper', 'scissor'];
const randomIndex = Math.round(Math.random() * 2);

// Let the computer to generate the random choices
const computersChoice = choices[randomIndex];


while( true ){

    // Store the players choice and check for invalid inputs
    const playersChoice = prompt('Enter your choice: Rock , Paper or Scissors (q to quit the game): ');

    if( playersChoice.toLowerCase() === 'q'){
        console.log('Thanks for playing! come again later.');
        break;
    }else if( playersChoice.toLowerCase() !== 'rock' &&
              playersChoice.toLowerCase() !== 'paper' &&
              playersChoice.toLowerCase() !== 'scissor' ){
                console.log('Please enter a valid input( choice) only!');
                continue;
    }else{
        // Preview the computers choice
        console.log('I choose: ' + computersChoice);
        
        // if the user enters one of the 3 choices i.e rock, paper or scissor , compare it with the computers choice
        if (playersChoice  === computersChoice){
            console.log(' Draw !');
            ties ++; // increase the tie counter by 1
        }else if( (playersChoice == 'paper' && computersChoice == 'rock') ||
                  (playersChoice == 'rock' && computersChoice == 'scissor') ||
                  (playersChoice == 'scissor' && computersChoice == 'paper')){
                    console.log(' You Win !');
                    palyersWins ++; // increase the players win counter by 1
        }else{
            console.log(' You Loss !');
            computersWins ++; // increase the computers Win counter by 1
        }
    }
}

// if the user breaks the game , show them results
console.log( 'Your result is:-  ' + palyersWins.toString() + ' Wins, '+ ties.toString() + ' Draws, and '+ computersWins.toString() + ' Losses !');
console.log( 'My result is:-  ' + computersWins.toString() + ' Wins, '+ ties.toString() + ' Draws, and '+ palyersWins.toString() + ' Losses !');

