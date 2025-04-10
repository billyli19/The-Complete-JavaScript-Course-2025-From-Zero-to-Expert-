'use strict';

// Selecting elements
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

// Starting conditions
let playerOneScore = 0;
let playerOneCurrentScore = 0;
let playerTwoScore = 0;
let playerTwoCurrentScore = 0;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

document.getElementById('score--0').textContent = playerOneScore;
document.getElementById('current--0').textContent = playerOneCurrentScore;
document.getElementById('score--1').textContent = playerTwoScore;
document.getElementById('current--1').textContent = playerTwoCurrentScore;

document.querySelector('.dice').classList.add('hidden');

// Function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

// Function to reset the game
const newGame = function () {
  playerOneScore = 0;
  playerOneCurrentScore = 0;
  playerTwoScore = 0;
  playerTwoCurrentScore = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  diceEl.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');

  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');

  document.querySelector('.dice').classList.add('hidden');

  document.getElementById('score--0').textContent = playerOneScore;
  document.getElementById('current--0').textContent = playerOneCurrentScore;

  document.getElementById('score--1').textContent = playerTwoScore;
  document.getElementById('current--1').textContent = playerTwoCurrentScore;
};

btnNewGame.addEventListener('click', newGame);

// Function to roll the dice
const rollDice = function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  document.querySelector('.dice').src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
};

btnRoll.addEventListener('click', rollDice);

// Function to hold the score
const holdScore = function () {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    diceEl.classList.add('hidden');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
  } else {
    switchPlayer();
  }
};

btnHold.addEventListener('click', holdScore);
