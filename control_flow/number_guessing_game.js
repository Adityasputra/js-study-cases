let guesses = [3, 7, 5];
let guessIndex = 0;

let randomNumber = 5;
let attempts = 0;
const maxAttempts = 3;
let guess;
let isCorrect = false;

// while method
while (attempts < maxAttempts && !isCorrect) {
  guess = guesses[guessIndex];
  console.log(`Attempt ${attempts + 1}: You guessed ${guess}`);
  attempts++;
  guessIndex++;

  if (guess === randomNumber) {
    console.log(
      `Correct! You guessed the number ${randomNumber} in ${attempts} attempt(s).`
    );
    isCorrect = true;
  } else if (guess < randomNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
}

if (!isCorrect) {
  console.log(`Sorry! The correct number was ${randomNumber}.`);
}

// do...while method
do {
  guess = guesses[guessIndex];
  console.log(`Attempt ${attempts + 1}: You guessed ${guess}`);
  attempts++;
  guessIndex++;

  if (guess === randomNumber) {
    console.log(
      `Correct! You guessed the number ${randomNumber} in ${attempts} attempt(s).`
    );
    isCorrect = true;
  } else if (guess < randomNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
} while (attempts < maxAttempts && !isCorrect);

if (!isCorrect) {
  console.log(`Sorry! The correct number was ${randomNumber}.`);
}
