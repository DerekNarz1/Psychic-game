var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Reset everything at start
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// Computer "Guessing'" through random selection of letters in alphabet
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
  // Changes when user guesses 
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
  // Save user guesses in bank 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Function will be called when everything is reset
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//Read user input
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You guessed correct!");
                reset();
            }

        }

        else if(guessesLeft == 0){
            // Loss condition is met and updates loss counter 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You guessed incorrect, Try Again?");
            // Reset to keep score
            reset();
        }
};