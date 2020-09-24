import { commonWords } from "./constants.js";



// random word more than 3 letters generator

let randomWord = commonWords.filter((words) => words.length >= 3);
let word = randomWord[Math.floor(Math.random() * randomWord.length)];
console.log(word);

//  create button for alphabet

let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => `<button class="letters" id="${letter}">${letter}</button>`)
  .join("");

document.querySelector("#keyboard").innerHTML = buttonsHTML;

// dashes
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

document.querySelector("#dashes").innerHTML = answerArray.join(" ");

// turn remaining
let maxWrongAnswers = 8;
document.querySelector("#guessedLetters").innerHTML = `Remaining Turn: ${maxWrongAnswers}`;;

// var to keep track of correct guessedLetters
let counter = 0;

// dashes replaced by letter 
document.querySelector("#keyboard").addEventListener("click", (e) => {
  e.target.disabled = true;
  let guess = e.target.id;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      document.querySelector("#dashes").innerHTML = answerArray.join(" ");
      counter += 1;
    }
  }
  if (word[j] !== guess) {
    maxWrongAnswers = maxWrongAnswers - 1;
    document.querySelector("#guessedLetters").innerHTML = `"Remaining Turn": ${maxWrongAnswers}`;
  }
  if (maxWrongAnswers === 0) {
    document.querySelector("#gameLost").innerHTML = "Play is Over";
  }
  if (counter === answerArray.length) {
    document.querySelector("#gameLost").innerHTML = "You Win";
  }
});