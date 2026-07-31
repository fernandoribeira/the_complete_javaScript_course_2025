"use strict";

// Variaveis DOM
const body = document.querySelector("body");
const buttonAgain = document.querySelector(".again");
const divNumber = document.querySelector(".number");
const inputGuess = document.querySelector(".guess");
const buttonCheck = document.querySelector(".check");
const pMessage = document.querySelector(".message");
const spanScore = document.querySelector(".score");
const spanHighscore = document.querySelector(".highscore");

// Função para gerar número aleatorio a ser adivinhado
function numberGenerator() {
    return Math.trunc(Math.random() * 20 + 1);
}

// Gerando numero a ser adivinhado
let secretNumber = numberGenerator();

// Capturando pontuações
let score = Number(spanScore.textContent);
let highscore = Number(spanHighscore.textContent);

// Logica do botao Check
buttonCheck.addEventListener("click", () => {
    // Capturando o valor inserido
    const guess = Number(inputGuess.value);

    // Testando se o valor é valido
    if (guess < 1 || guess > 20 || !guess) {
        // Se for invalido sera apresentado erro
        pMessage.textContent = "⛔️ Invalid number!";
    } else if (guess === secretNumber) {
        // Logica se acertou o valor
        // Mensagem de valor correto
        divNumber.textContent = secretNumber;
        pMessage.textContent = "🎉 Correct Number!";
        // Ajustando pontuação highscore se necessario
        if (score > highscore) {
            highscore = score;
            spanHighscore.textContent = highscore;
        }
        // Alterando a cor de fundo
        body.style.backgroundColor = "#60b347";
        // Desativando os botoes
        buttonCheck.disabled = true;
        inputGuess.disabled = true;
    } else {
        // Logica se errou o valor
        if (guess < secretNumber) {
            // Mensagem de valor muito baixo
            pMessage.textContent = "📉 Too low!";
        } else {
            // Mensagem de valor muito alto
            pMessage.textContent = "📈 Too high!";
        }
        // Reduzindo pontuação
        --score;
        spanScore.textContent = score;
        // Encerrando o jogo caso pontuação seja zero
        if (score === 0) {
            // Mensagem de jogo finalizado
            pMessage.textContent = "💥 You lost the game!";
            // Desativando os botoes
            buttonCheck.disabled = true;
            inputGuess.disabled = true;
        }
    }
});

// Logica do botao Again
buttonAgain.addEventListener("click", () => {
    // Gera novo numero secreto
    secretNumber = numberGenerator();
    // Faz reset dos campos
    divNumber.textContent = "?";
    pMessage.textContent = "Start guessing...";
    inputGuess.value = "";
    // Faz reset da cor de fundo
    body.style.backgroundColor = "#222";
    // Faz reset do score
    score = 20;
    spanScore.textContent = 20;
    // Reativa botoes
    buttonCheck.disabled = false;
    inputGuess.disabled = false;
});
