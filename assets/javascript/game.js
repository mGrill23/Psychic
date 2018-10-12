var wins = 0;
var losses = 0;
var guesses = 15;

var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsNum = document.getElementById("wins-count");
var guessNum = document.getElementById("guess-count");
var lossesNum = document.getElementById("losses-count");

document.onkeyup = function(event) {
    var randomNum = Math.floor(Math.random() * compChoices.length);
    var compChoice = compChoices[randomNum];

    var userGuess = event.key;

    if (userGuess === compChoice){
        wins++;
        guesses = 15;
    }

    else if (userGuess != compChoice && guesses == 0) {
        losses++;
        guesses = 15;
    }

    else{
        guesses--;
    }


}

