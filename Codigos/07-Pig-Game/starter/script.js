"use strict";

// Variaveis

const variaveisDOM = {
    dice: document.querySelector(".dice"),
    score0: document.querySelector("#score--0"),
    score1: document.querySelector("#score--1"),
    current0: document.querySelector("#current--0"),
    current1: document.querySelector("#current--1"),
    btnNew: document.querySelector(".btn--new"),
    btnRoll: document.querySelector(".btn--roll"),
    btnHold: document.querySelector(".btn--hold"),
};

const variaveisComuns = {
    score0: 0,
    score1: 0,
    currentScore: 0,
    activePlayer: 0,
};

// Funcoes

function newGame() {
    variaveisComuns.score0 = 0;
    variaveisComuns.score1 = 0;
    variaveisComuns.currentScore = 0;
    variaveisComuns.activePlayer = 0;
    variaveisDOM.score0.textContent = 0;
    variaveisDOM.score1.textContent = 0;
    variaveisDOM.current0.textContent = 0;
    variaveisDOM.current1.textContent = 0;
}

function roll() {
    const diceRoll = Math.trunc(Math.random() * (6 - 1 + 1)) + 1;
    variaveisDOM.dice.src = `dice-${diceRoll}.png`;
    variaveisDOM.dice.classList.remove("hidden");
    if (diceRoll !== 1) {
        variaveisComuns.currentScore += diceRoll;
        variaveisDOM.current0.textContent = variaveisComuns.currentScore;
    } else {
        variaveisComuns.currentScore = 0;
        variaveisComuns.activePlayer = variaveisComuns.activePlayer === 0 ? 1 : 0;
    }
    console.log(variaveisComuns);
    console.log(diceRoll);
}

function hold() {
    if (variaveisComuns.activePlayer === 0) {
        variaveisComuns.score0 += variaveisComuns.currentScore;
        variaveisDOM.score0.textContent = variaveisComuns.score0;
        variaveisDOM.current0.textContent = 0;
    } else {
        variaveisComuns.score1 += variaveisComuns.currentScore;
        variaveisDOM.score1.textContent = variaveisComuns.score1;
        variaveisDOM.current1.textContent = 0;
    }
    variaveisComuns.currentScore = 0;
    variaveisComuns.activePlayer = variaveisComuns.activePlayer === 0 ? 1 : 0;
}

function initGame() {
    newGame();
}

// Eventos

variaveisDOM.btnNew.addEventListener("click", newGame);

variaveisDOM.btnRoll.addEventListener("click", roll);

variaveisDOM.btnHold.addEventListener("click", hold);

// Inicio do jogo

initGame();
