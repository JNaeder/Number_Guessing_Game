// Document Elements
hiddenNumberText = document.getElementById("hidden_number");
indicatorText = document.getElementById("indicator_text");
livesLeftText = document.getElementById("lives_left_text");
guessedNumber = document.getElementById("guess");
enterGuessButton = document.getElementById("enter_guess");
resetBtn = document.getElementById("reset_btn");

// Variables
lives = 0;
startingLives = 10;
indicatorText.innerHTML = "";
hiddenNumber = 0;

// Functions
function createRandomNumber(){
    hiddenNumber = Math.trunc(Math.random() * 100);
}
function resetInputValue(){
    guessedNumber.value = "";
}
function makeAGuess(guess){
    if (lives > 0){
        removeLife();
        if(guess > hiddenNumber){
            indicatorText.innerHTML = "Too High!";
        } else if(guess < hiddenNumber){
            indicatorText.innerHTML = "Too Low!";
        } else{
            indicatorText.innerHTML = "You Win!";
            let tries = startingLives - lives;
            indicatorText.innerHTML = `You guessed the correct answer in ${tries} ${tries > 1 ? 'tries' : 'try' }!`;
            showHiddenNUmber();
        }
    }
    resetInputValue();
}
function showHiddenNUmber(){
    hiddenNumberText.innerHTML = hiddenNumber;
}
function removeLife(){
    lives--;
    livesLeftText.innerHTML = `${lives} Guesses Left`;
    if(lives <= 0){
        showHiddenNUmber();
        indicatorText.innerHTML = "You Lose!";
    }
}
function startGame(){
    lives = startingLives;
    livesLeftText.innerHTML = `${lives} Guesses Left`
    hiddenNumberText.innerHTML = "???";
    indicatorText.innerHTML = "";
    resetInputValue();
    createRandomNumber();
    console.log(hiddenNumber);
}

// Event Listeners
guessedNumber.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        makeAGuess(guessedNumber.value);
    }
})
enterGuessButton.addEventListener("click", function(){
    makeAGuess(guessedNumber.value);
})
resetBtn.addEventListener("click", startGame);

// Start
startGame();

