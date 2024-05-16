Steps to Create the Hangman Game

1. First step is you are going to need to create an empty game board. An empty game
board is when we have an array that has underscores for each letter in the word. For
example, if the word is ‘cat’ then our empty game board should have 3 underscores (one
for each letter): [ ‘_’, ‘_’, ‘_’]. If the word is ‘sugar’ then the game board should have 5 underscores: [‘_’,’_’,’_’,’_’,’_’]

a. The creation of the empty game board should be created dynamically. Meaning
you should not create a bunch of if statements to test which word was randomly
chosen. Instead your code should work even if I added 1,000 more possible
words to be chosen. To make this work you will need to create a loop that loops
as many times as there are letters in the word. Inside this loop push an
underscore to an array that you have decided will be the game board.

/////////////////////////////////////////////////////////////////////////////

2. Once the game board is created we should create an alert statement that shows the
user what is in the game board. After showing the user the game board we can use a
prompt to ask for the user's guess of what letter they think is in the word.

/////////////////////////////////////////////////////////////////////////////

3. Now that we have the users input we need to test if the letter that was guessed is in the word. You will need to make another loop that loops as many times as there are letters in the word. This time in the body of the loop you will need to create an if statement that tests if the users guess is equal to theWord[i] ← this bracket notation that we use on arrays can also be used on strings. So this will select one letter from the word. And that letter will be at position i. If the user's guess is at the Word[i] then we need to change our game board at position i to be the user's guess. This is because we know we have found the correct letter at the i position so we should show the user that letter having been guessed at the i position in the gameboard.

a. For example if the word is cat and I guess ‘a’. The gameboard should now be
[‘_’,’a’,’_’] after my loop runs.

/////////////////////////////////////////////////////////////////////////////

4. Now that we have a way to update the gameboard when the user guesses a letter we
need to set up some functionality for when the user's guess is incorrect.

a. Create a variable that keeps track of the tries the user has left. Set it equal to a
number that seems realistic to guess the word.

b. Create an alert right above where you are alerting the game board. This alert
should show the user how many tries they have left.

/////////////////////////////////////////////////////////////////////////////

5. Consider how we can determine if the user guessed an incorrect letter. We can’t make
an else statement in our previously made for loop because even if we guessed a correct
letter, that correct letter is not at each position of theWord. Instead we should ask
ourselves the opposite question, “Where do I know that the user has guessed correctly?”
If we can determine that, then we can also know if the user has an incorrect guess.

a. The answer is that we know that the user has guessed a correct letter in our if
statement where we change the game board to show the correct user's guess
instead of an underscore.

b. What we will need to do is create a boolean variable right before our loop that is
set false. We could call this variable isCorrect.

c. Then right after we change the gameboard we should change isCorrect to be true
because we know that we have a correct letter.

d. After the loop, create an if statement that determines if isCorrect is still false. If it is then we should take away a try.

/////////////////////////////////////////////////////////////////////////////

6. Now we want to create an array where we are going to store the invalid guesses. Once
done, determine where we have decided that we have an invalid guess and push that
guess to our new array.

a. Also create a new alert where you have created the others to show the user their
incorrect guesses.

/////////////////////////////////////////////////////////////////////////////

7. This next step is important. We now need to create some code to determine if the game should end.

a. If the user guesses the whole word then we should congratulate them with an
alert

b. If the game board has been filled up then we should congratulate the user with
an alert

c. If the tries gets down to 0 we should alert the user that they lost and what the
word was.

/////////////////////////////////////////////////////////////////////////////

8. Up until this point we have been able to enter in a single letter, run some code, then thegame ends. Not very exciting. Create a while loop around the code that should be runover and over again(Not all the code we have written will go in the while loop) until oneof the winning or losing statements is met. Create a boolean variable right above the while that is set to true. Name it something like gameIsRunning. You can place thisvariable in the condition of the while loop.

a. If you were to run the code right now you would get an infinite loop. So change
gameIsRunning to be false anytime a winning condition or a losing condition is
met. This will make it so the loop stops running and ends the game appropriately.

/////////////////////////////////////////////////////////////////////////////

9. Test your code thoroughly. You should have been testing anytime you were writing code but this is where it is most crucial. Determine if the game is running correctly If it is then you are finished! Great work!! If the game is not running properly be sure to study your code and find where the errors may be occurring.