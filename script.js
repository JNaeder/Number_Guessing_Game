hiddenNumberText = document.getElementById("hidden_number");
indicatorText = document.getElementById("indicator_text");
livesLeftText = document.getElementById("lives_left_text");
guessedNumber = document.getElementById("guess");
enterGuessButton = document.getElementById("enter_guess");

lives = 10;
indicatorText.innerHTML = "";
hiddenNumber = 0;

function createRandomeNumber(){
    hiddenNumber = Math.trunc(Math.random() * 100);
}

enterGuessButton.addEventListener("click", function(){
    makeAGuess(guessedNumber.value);
})

function makeAGuess(guess){
    if(guess > hiddenNumber){
        indicatorText.innerHTML = "Too High!";
    } else if(guess < hiddenNumber){
        indicatorText.innerHTML = "Too Low!";
    } else{
        indicatorText.innerHTML = "You Win!";
    }
}

createRandomeNumber();

