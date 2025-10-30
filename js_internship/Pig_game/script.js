'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const newbtn = document.querySelector('.btn--new');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
diceElement.classList.add('hidden');

let scores, currentScore, activePlyer, playing;


const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlyer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceElement.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

function switchPlayer() {
    document.getElementById(`current--${activePlyer}`).textContent = 0;
    document.querySelector(`.player--${activePlyer}`).classList.remove('player--active')
    activePlyer = activePlyer == 0 ? 1 : 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlyer}`).classList.add('player--active')

}

rollbtn.addEventListener('click', () => {
    if (playing) {
        //generate dice
        const dice = Math.trunc(Math.random() * 6) + 1;

        //add img
        diceElement.classList.remove('hidden');

        diceElement.src = `dice-${dice}.png`;

        //if dice not 1
        if (dice !== 1) {
            //update current score
            currentScore += dice;
            document.getElementById(`current--${activePlyer}`).textContent = currentScore;
            // current0.textContent = currentScore;

        } else {
            switchPlayer();
        }
    }
})


holdbtn.addEventListener('click', () => {
    if (playing) {
        scores[activePlyer] += currentScore;

        document.querySelector(`#score--${activePlyer}`).textContent = scores[activePlyer];

        if (scores[activePlyer] >= 100) {
            document.querySelector(`.player--${activePlyer}`).classList.add('player--winner');
            playing = false;
              diceElement.classList.add('hidden');

        } else {
            switchPlayer();
        }
    }

})


newbtn.addEventListener('click',init);