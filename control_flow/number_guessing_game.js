const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;

console.log("Guess the number (1 to 10). You have 3 attempts.");

readline.question("Enter your guess: ", function handleAnswer(answer) {
  const guess = parseInt(answer);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Invalid input. Please enter a number between 1 and 10.");
  } else if (guess === randomNumber) {
    console.log(
      `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempt(s).`
    );
    readline.close();
    return;
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }

  if (attempts >= maxAttempts) {
    console.log(
      `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`
    );
    readline.close();
  } else {
    readline.question("Enter your guess: ", handleAnswer);
  }
});
