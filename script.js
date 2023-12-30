'use strict';

//Generating random secret number and storing it
let secretNumber = Math.trunc(Math.random() * 20)+1;

//storing the score
let score = 20;

//Highscore 
let highScore = 0;

//Condition
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value); //convert input value into number

    if(!guess){ //checking is guess is empty then show message
        document.querySelector('.message').textContent = "❌ No number"; 

    } else if (guess === secretNumber){ //if number matches then show message
        document.querySelector('.message').textContent = "🎉 Correct Number";

        //change question mark to correct number
        document.querySelector('.number').textContent = guess;

        //if guess is right then update the highscore value
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }

        //when player wins 
        //manipulating css -> changing background color
        document.querySelector('body').style.backgroundColor = '#60b347';

        //changing the style of main number (increasing width)
        document.querySelector('.number').style.width = '30rem';
    } else if(guess !== secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "";
            document.querySelector('.score').textContent = 0;
        }

    }




//     } else if (guess > secretNumber) { //if guess is greater than then show message and decrease the score

//         //If the score is greater than 1 then we can have change to play game
//         if(score > 1){
//             document.querySelector('.message').textContent = "📈 Too High!";
//             //updating score and display it
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = "😟 You lost the game";
//             document.querySelector('.score').textContent = 0;
//         }
        

//     } else if(guess < secretNumber){ //if guess is low then show message and decrease the score

//         if(score > 1){
//             document.querySelector('.message').textContent = "📉 Too Low!";

//             //updating score and display it
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else{
//             document.querySelector('.message').textContent = "😟 You lost the game";
//             document.querySelector('.score').textContent = 0;
//         }
        
//     }
});


//Functionality of Again button (reset everything)
document.querySelector('.again').addEventListener('click', () => {
    //changing the main number value with ?
    document.querySelector('.number').textContent = "?";
    //reset the input box
    document.querySelector('.guess').value = "";
    //reset score value
    document.querySelector('.score').textContent = "20";
    score = 20;
    //change the message
    document.querySelector('.message').textContent = "Start guessing...";

    //changing the width to normal
    document.querySelector('.number').style.width = "15rem";
    //changing the background color
    document.querySelector('body').style.backgroundColor = "#222";

    //reset the secretNumber 
    let secretNumber = Math.trunc(Math.random() * 20)+1;
});