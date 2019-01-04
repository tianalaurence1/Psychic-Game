


// tracking wins, losses, guesses. It begins at 0
var won = 0;
var lost = 0;
var attempts = 10;
var userArray = [];
var playerGuess = [];
var computerChoice = computerChoice;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// set computerchoice to a random letter
function jsGuess() {   
computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);

}
jsGuess()
   // user presses a key to run the following program

   document.onkeypress = function(event) {
playerGuess.push (event.key);
   

    if(event.key === computerChoice){
        won++;
        attempts = 10;
        jsGuess()

    }else{
        attempts--;
    }

    if(attempts === 0){
        lost++;
        attempts = 10;
        playerGuess = [];
        jsGuess()
    }
    if (userArray.indexOf("guesses") >= 0) {

    } else {
      //  yourGuesses.push(guesses);
       // document.getElementById('guesses').innerHTML = yourGuesses;
       // console.log(yourGuesses);

    }

    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;
    document.getElementById('attempts').innerHTML = attempts;
    document.getElementById('playerGuess').innerHTML = playerGuess;

}
 