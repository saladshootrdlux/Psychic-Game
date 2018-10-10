
// Sets the array of letter choices.

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for tracking our wins, losses and ties. They begin at 0.

var wins = 0;
var losses = 0;

// Reset function.

function reset() {
    guessesLeft = 10;
    guessedLetters = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Letter to guess: " + computerChoice);
  }


reset()

// When the user presses a key, it will run the following function...

document.onkeypress = function (event) {
    var userGuess = event.key;
    alert("You guessed: " + event.key);
    var evt = evt || window.event;
    function addUserGuess() {
        guessedLetters.push(userGuess);
    }
    addUserGuess()


    if (userGuess === computerChoice) {
        alert("You're psychic.")
        wins++;
        reset();
    } else {
        alert("Try again.");
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++
        alert("Computer guessed: " + computerChoice);
        reset();
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById('lettersGuessed').innerHTML = "Letters Guessed: " + guessedLetters;

}
