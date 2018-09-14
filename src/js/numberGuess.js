const min = 1;
const max = 100;
const numGuesses = 7;
const guessMsg = "Guess a number between 1 & 100!";
const highMsg = "Too high!";
const lowMsg = "Too low!";
const winMsg = "You won!";
const loseMsg = "You lost!"

let answer = Math.floor(Math.random() * max+1) + 1;
let win = false;

let displayMsg = guessMsg;
for (let i=0; i<numGuesses; i++) {
    let guess = parseInt(prompt(displayMsg));
    console.count("count is");
    if (guess === answer) {
        displayMsg = winMsg;
        win = true;
        break;
    }
    else if (guess > answer) {
        displayMsg = highMsg;
    }
    else if (guess < answer) {
        displayMsg = lowMsg;
    }
}
if (!win) {
    displayMsg = loseMsg;
}
alert(displayMsg);
