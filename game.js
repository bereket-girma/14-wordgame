import { commonWords } from "./constants.js";

// random word more than 3 leeters
let maxWrongAnswers = 8;
let randomWord = commonWords.filter((words) => words.length >= 3);
let word = randomWord[Math.floor(Math.random() * randomWord.length)];
console.log(word);
//  create button for alphabet
let buttonsForAlphabet = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => `<button id="${letter}">${letter}</button>`)
  .join("");
document.querySelector("#keyboard").innerHTML = buttonsForAlphabet;
// create dashes
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = " _ ";
}
document.querySelector("#dashes").innerHTML = answerArray.join(" ");
// replacing dash with letter if guessed right
document.querySelector("#keyboard").addEventListener("click", (e) => {
  let guess = e.target.id;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      document.querySelector("#dashes").innerHTML = answerArray.join(" ");
    }
  }

  if (word[j] !== guess) {
    maxWrongAnswers = maxWrongAnswers - 1;
    document.querySelector(
      "#guessedLetters"
    ).innerHTML = `Turns Remaining: ${maxWrongAnswers}`;
  } else if (word[j] === guess) {
    maxWrongAnswers = maxWrongAnswers;
    document.querySelector(
      "#guessedLetters"
    ).innerHTML = `Turns Remaining: ${maxWrongAnswers}`;
  }

  // When the user runs out of turns, show a losing screen
  if (maxWrongAnswers === 0) {
    document.querySelector("#gameOver").innerHTML = "Play is Over!";
  }
});

// turn remaining,
// let maxWrongAnswers = 8;
document.querySelector(
  "#guessedLetters"
).innerHTML = `Turns Remaining: ${maxWrongAnswers}`;
