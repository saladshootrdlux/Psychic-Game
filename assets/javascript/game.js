
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for tracking our wins, losses and ties. They begin at 0.

var wins = 0;
var losses = 0;
var guessesLeft = 10;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)

// When the user presses a key, it will run the following function...

reset=function (){
    guessesLeft=10;
    lettersGuessed=("");
}


document.onkeypress = function (event) {
    var userGuess = event.key;
    var evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var lettersGuessed = String.fromCharCode(charCode);

    if (userGuess === computerChoice) {
        wins++;
    } else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++
        alert("You Lose!");
        reset();
        // RESET FUNCTION NOTE: Tried setting document.getElementById('guessesLeft').innerHTML = "Guesses Left: 10" but this doesn't work.
    }

      

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;

    // ... if win or lose, reset, set a reset function
    // This is where I have gotten stuck. I am trying to reset the guesses.
    // I've tried setting a reset function as follows ... but this just breaks the game.
    // 
    
    // reset();


    
}
