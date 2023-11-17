// first load the prompt-sync library 
const prompt = require('prompt-sync')();

// Welcome the user
console.log("Welcome to our Quiz center ");

// Declar variables to hold number of correct answers and percentage
const totalQuestions = 3;
let gotCorrect = 0; //initially zero questions get answered correclty


// Ask the user quiz questions and store their answer in a variable.

// Question number 1
const usersAnswer1 = prompt('What is the name of a programming language that defines the behaviour of a web-page?');

// Define answer for the above question
const correctAnswer1 = 'JAVASCRIPT';

// Compare user answer with the correct answer
if (usersAnswer1.toUpperCase() === correctAnswer1 ){
    console.log("Nice, That's correct!!! ");
    gotCorrect ++;
}else{
    console.log("Sorry, That's not correct!!! ");
}

// Question number 2
const usersAnswer2 = prompt('What is the name of a programming language that defines the style of a web-page?');

// Define answer for the above question
const correctAnswer2 = 'CSS';

// Compare user answer with the correct answer
if (usersAnswer2.toUpperCase() === correctAnswer2 ){
    console.log("Nice, That's correct!!! ");
    gotCorrect ++;
}else{
    console.log("Sorry, That's not correct!!! ");
}

// Question number 3
const usersAnswer3 = prompt('What is the name of a programming language that defines the structur of a web-page?');

//Define answer for the above question
const correctAnswer3 = 'HTML';

//Compare user answer with the correct answer
if (usersAnswer3.toUpperCase() === correctAnswer3 ){
    console.log("Nice, That's correct!!! ");
    gotCorrect ++;
}else{
    console.log("Sorry, That's not correct!!! ");
}

const percentage = Math.round((gotCorrect / totalQuestions ) * 100 ); //percentage calculation


//Notifiy the user his/her results
console.log("You have totally answered " + gotCorrect + " questions outof "+ totalQuestions + " !");
console.log("Your Score is almost: "+ percentage + " %");



