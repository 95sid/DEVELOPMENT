# Projects related to Dom

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qb1yoc?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 1

```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click",function(e){
    const color = e.target.id;
    body.style.backgroundColor = color;
  })
})
```

## Project 2

```
const form = document.querySelector('form')

form.addEventListener("submit",function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if(height<=0 || height == '' || isNaN(height)){
    result.innerHTML = "Please Enter the Valid Value"
  }
  else if(weight<=0 || weight == '' || isNaN(weight)){
    result.innerHTML = "Please Enter the Valid Value"
  }
  else{
    const bmi = (weight/(height*height)).toFixed(2);
    if(bmi < 18.6){
      result.innerHTML = `Your BMI is ${bmi} </br> You are Underweight`
    }
    else if(bmi >= 18.6 && bmi <= 24.6){
      result.innerHTML = `Your BMI is ${bmi} </br> You are in Normal Range`
    }
    else{
      result.innerHTML = `Your BMI is ${bmi} </br> You are overweight`
    }
  }
  form.reset();
})
```

## Project 3

```
const clock = document.getElementById("clock");
console.log(clock)
let currentDate = new Date();
// controls javascript events
setInterval(function(){
  let currentDate = new Date();
  clock.innerHTML = `${currentDate.toLocaleTimeString()}`
},1000)

```

## Project 4

```
const userValue = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let randomNum = Math.floor(Math.random() * 100 + 1);

let previousGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userValue.value);
    // console.log(guess)
    isValidguess(guess);
  });
}
function isValidguess(guess) {
  if (isNaN(guess)) {
    alert('Enter a Valid Number');
  } else if (guess > 100) {
    alert('Please Enter the value less than 100');
  } else if (guess < 0) {
    alert('Please Enter the value greater than 0');
  } else {
    previousGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number was ${randomNum}`);
      endgame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  if (guess === randomNum) {
    displayMessage(`You guessed Right`);
    endgame();
  } else if (guess > randomNum) {
    displayMessage(`Gueseed Value is greater then actual Value`);
  } else if (guess < randomNum) {
    displayMessage(`Guessed Value is smaller then actual value`);
  }
}
function displayGuess(guess) {
  userValue.value = '';
  guesSlot.innerHTML += ` ${guess}`;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
  userValue.value = '';
  userValue.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newgame">Start a new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startgame();
}
function startgame() {
  const newGame = document.querySelector('#newgame');
  newGame.addEventListener('click', function (e) {
    randomNum = Math.floor(Math.random() * 100 + 1);
    previousGuess = [];
    numGuesses = 1;
    guesSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses} `;
    userValue.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
