// generate random word
function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make'];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}
// create empty gameboard
let gameBoard = [];
let word = randomWords();

// create a gameboard length from size of random word
for (let i = 0; i < word.length; i++) {
    gameBoard.push("_");
}

let triesLeft = 6;
let invalidGuesses = [];
let gameIsRunning = true;

// main game loop
while (gameIsRunning) {
    alert(`Gameboard: ${gameBoard.join(' ')}`);
    alert(`Incorrect guesses: ${invalidGuesses.join(', ')}`);
    alert(`Tries left: ${triesLeft}`);

    let userGuess = prompt("Enter a letter:");
    let isCorrect = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === userGuess) {
            gameBoard[i] = userGuess;
            isCorrect = true;
        }
    }

    // if incorrect subtract one from tries left
    if (!isCorrect) {
        triesLeft--;
        invalidGuesses.push(userGuess);
    }

    // check if the user won or lost
    if (!gameBoard.includes('_')) {
        alert("Congratulations you won! You guessed the word: " + word);
        gameIsRunning = false;
    } else if (triesLeft <= 0) {
        alert("You Lost! The word was: " + word);
        gameIsRunning = false;
    } else if (userGuess === word) {
        alert(`Congratulations you guess the entire word!!`);
        gameIsRunning = false;
    }
}