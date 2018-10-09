
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for tracking our wins, losses and ties. They begin at 0.

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

function reset() {
    guessesLeft = 10;
    guessedLetters = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Letter to guess: " + computerChoice);
  }

// When the user presses a key, it will run the following function...

document.onkeypress = function (event) {
    var userGuess = event.key;
    alert("You guessed: " + event.key);
    var evt = evt || window.event;
    function addUserGuess() {
        guessedLetters.push(userGuess);
    }
    addUserGuess()
    // var charCode = evt.keyCode || evt.which;
    // OLD CODE FOR GENERATING LETTERS GUESSED //
    // var lettersGuessed = String.fromCharCode(charCode);


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

    // OLD CODE FOR GENERATING LETTERS GUESSED //
    // document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    // THIS DID NOT WORK AS INTENDED, UNABLE TO RESET //


    // Create global empty array, e.g. "user guesses", with a rule if user's guess = computer's guess, add a win.
    // Activate new game function and alert. Else, push user's guess into user guesses array. That way all user's guesses are pushed into array.//#endregion
    // Then pulling doc.getelementid .innerHTML= Guesses so far: + userGuesses


    // TWO BIG QUESTIONS
    // 1. How do I reset the computer guess whenever I want to?
    // 2. Is there a good way to use "String.fromCharCode(charCode)" to achieve the goal outlined for this game? Should I be using array?

}
