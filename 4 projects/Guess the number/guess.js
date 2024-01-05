// const form = document.querySelector('.form');
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// const lowHigh = document.querySelector('.lowOrHi');
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     if (lastResult.innerHTML == 0 ) {
//         return lowHigh.innerHTML =  `You lost.Please try again.`;
//     }

//     const guessField = parseInt(document.querySelector(".guessField").value);
//     if (guessField === "" || guessField <= 0 || guessField >= 101 || isNaN(guessField)) {
//         lowHigh.innerHTML =  `Please enter a valid number : ${guessField}`
//         guesses.innerHTML += `${guessField}-`
//         lastResult.innerHTML = lastResult.innerHTML - 1;

//     }else  if (randomNumber > guessField) {
//         lowHigh.innerHTML = `${guessField} is too low.`
//         guesses.innerHTML += `${guessField}-`
//         lastResult.innerHTML = lastResult.innerHTML - 1;

//     } else if (randomNumber < guessField) {
//         lowHigh.innerHTML = `${guessField} is too high.`
//         guesses.innerHTML += `${guessField}-`
//         lastResult.innerHTML = lastResult.innerHTML - 1;

//     }else{
//         guesses.innerHTML += `${guessField}-`
//         lastResult.innerHTML = lastResult.innerHTML - 1;
//         return lowHigh.innerHTML = `${guessField} is correct. You Won.`;    
//     }

// });


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

