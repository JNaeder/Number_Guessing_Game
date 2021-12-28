// Document Elements
hiddenNumberText = document.getElementById("hidden_number");
indicatorText = document.getElementById("indicator_text");
livesLeftText = document.getElementById("lives_left_text");
guessedNumber = document.getElementById("guess");
enterGuessButton = document.getElementById("enter_guess");
resetBtn = document.getElementById("reset_btn");

// Variables
lives = 10;
indicatorText.innerHTML = "";
hiddenNumber = 0;

// Functions
function createRandomeNumber(){
    hiddenNumber = Math.trunc(Math.random() * 100);
}
function resetValues(){
    guessedNumber.value = "";
}
function makeAGuess(guess){
    if(guess > hiddenNumber){
        indicatorText.innerHTML = "Too High!";
        removeLife();
    } else if(guess < hiddenNumber){
        indicatorText.innerHTML = "Too Low!";
        removeLife();
    } else{
        indicatorText.innerHTML = "You Win!";
        showHiddenNUmber();
    }
    resetValues();
}
function showHiddenNUmber(){
    hiddenNumberText.innerHTML = hiddenNumber;
}
function removeLife(){
    lives--;
    livesLeftText.innerHTML = `${lives} Guesses Left`;
}

function startGame(){
    lives = 10;
    livesLeftText.innerHTML = `${lives} Guesses Left`
    hiddenNumberText.innerHTML = "???";
    indicatorText.innerHTML = "";
    resetValues();
    createRandomeNumber();
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

