"use strict";

// Variaveis

const vDOM = {
    diceImage: document.querySelector(".dice"),
    buttonNew: document.querySelector(".btn--new"),
    buttonRoll: document.querySelector(".btn--roll"),
    buttonHold: document.querySelector(".btn--hold"),
};

const player1 = {
    totalScore: 0,
    currentScore: 0,
    totalScoreDOM: document.querySelector("#score--0"),
    currentScoreDOM: document.querySelector("#current--0"),
    playerBackground: document.querySelector(".player--0"),
};

const player2 = {
    totalScore: 0,
    currentScore: 0,
    totalScoreDOM: document.querySelector("#score--1"),
    currentScoreDOM: document.querySelector("#current--1"),
    playerBackground: document.querySelector(".player--1"),
};

let activePlayer = player1;

// Funcoes

function newGame() {
    resetPlayerScore(player1);
    resetPlayerScore(player2);
    activePlayer = player1;
    player1.playerBackground.classList.add("player--active");
    player2.playerBackground.classList.remove("player--active");
    player1.playerBackground.classList.remove("player--winner");
    player2.playerBackground.classList.remove("player--winner");
    vDOM.diceImage.classList.add("hidden");
    vDOM.buttonRoll.disabled = false;
    vDOM.buttonHold.disabled = false;
}

function resetPlayerScore(player) {
    player.totalScore = 0;
    player.currentScore = 0;
    player.totalScoreDOM.textContent = 0;
    player.currentScoreDOM.textContent = 0;
}

function changeActivePlayer() {
    if (activePlayer === player1) {
        activePlayer = player2;
        player1.playerBackground.classList.remove("player--active");
        player2.playerBackground.classList.add("player--active");
    } else {
        activePlayer = player1;
        player1.playerBackground.classList.add("player--active");
        player2.playerBackground.classList.remove("player--active");
    }
}

function resetCurrentPlayerScore() {
    activePlayer.currentScore = 0;
    activePlayer.currentScoreDOM.textContent = 0;
}

function hideDice() {
    vDOM.diceImage.classList.add("hidden");
}

function checkWinner() {
    if (activePlayer.totalScore >= 20) {
        activePlayer.playerBackground.classList.remove("player--active");
        activePlayer.playerBackground.classList.add("player--winner");
        vDOM.buttonRoll.disabled = true;
        vDOM.buttonHold.disabled = true;
    } else {
        changeActivePlayer();
    }
}

function addTotalScore() {
    activePlayer.totalScore += activePlayer.currentScore;
    activePlayer.totalScoreDOM.textContent = activePlayer.totalScore;
}

function addCurrentScore(number) {
    activePlayer.currentScore += number;
    activePlayer.currentScoreDOM.textContent = activePlayer.currentScore;
}

function diceRoll() {
    return Math.trunc(Math.random() * (6 - 1 + 1)) + 1;
}

function changeDice(number) {
    vDOM.diceImage.src = `dice-${number}.png`;
    vDOM.diceImage.classList.remove("hidden");
}

function roll() {
    const number = diceRoll();
    changeDice(number);
    if (number !== 1) {
        addCurrentScore(number);
    } else {
        resetCurrentPlayerScore();
        changeActivePlayer();
    }
}

function hold() {
    addTotalScore();
    resetCurrentPlayerScore();
    checkWinner();
}

function initGame() {
    newGame();
}

// Eventos

vDOM.buttonNew.addEventListener("click", newGame);

vDOM.buttonRoll.addEventListener("click", roll);

vDOM.buttonHold.addEventListener("click", hold);

// Inicio do jogo

initGame();
