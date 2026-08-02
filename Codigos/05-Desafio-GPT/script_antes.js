"use strict";

// Variaveis DOM
const botoes = document.querySelectorAll("input[type=radio]");
const jogar = document.querySelector(".jogar");
const quadroResumo = document.querySelector(".quadroResumo");
const jogoNaoIniciadoResumo = document.querySelector(".jogoNaoIniciadoResumo");
const quadroRodada = document.querySelector(".quadroRodada");
const jogoNaoIniciadoRodada = document.querySelector(".jogoNaoIniciadoRodada");
const quantidadeRodadas = document.querySelector(".quantidadeRodadas");
const minhasVitorias = document.querySelector(".minhasVitorias");
const vitoriasComputador = document.querySelector(".vitoriasComputador");
const empates = document.querySelector(".empates");
const voceEscolheu = document.querySelector(".voceEscolheu");
const computadorEscolheu = document.querySelector(".computadorEscolheu");
const resultado = document.querySelector(".resultado");
const reset = document.querySelector(".reset");

// Variaveis comuns
let quantidadeRodadasContador = 0;
let minhasVitoriasContador = 0;
let vitoriasComputadorContador = 0;
let empatesContador = 0;

// Reset de jogo
reset.addEventListener("click", () => {
    quantidadeRodadasContador = 0;
    minhasVitoriasContador = 0;
    vitoriasComputadorContador = 0;
    empatesContador = 0;
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].checked = false;
    }
    quantidadeRodadas.textContent = "";
    minhasVitorias.textContent = "";
    vitoriasComputador.textContent = "";
    empates.textContent = "";
    voceEscolheu.textContent = "";
    computadorEscolheu.textContent = "";
    resultado.textContent = "";
    jogoNaoIniciadoResumo.style.display = "block";
    jogoNaoIniciadoRodada.style.display = "block";
    quadroResumo.style.display = "none";
    quadroRodada.style.display = "none";
});

// Logica do botao Jogar
jogar.addEventListener("click", () => {
    // Capturando minha jogada
    let minhaJogada;
    for (let i = 0; i < botoes.length; i++) {
        if (botoes[i].checked) {
            minhaJogada = botoes[i].value;
        }
    }
    if (minhaJogada) {
        // Criando jogada computador
        let jogadaComputador;
        const opcoes = ["pedra", "papel", "tesoura"];
        jogadaComputador = opcoes[Math.trunc(Math.random() * 3)];
        // Comparar jogadas
        let resultadoTexto;
        // Empate
        if (
            (minhaJogada == "pedra" && jogadaComputador == "pedra") ||
            (minhaJogada == "papel" && jogadaComputador == "papel") ||
            (minhaJogada == "tesoura" && jogadaComputador == "tesoura")
        ) {
            resultadoTexto = "Empate!";
            empatesContador++;
        }
        // Jogador ganha
        if (
            (minhaJogada == "pedra" && jogadaComputador == "tesoura") ||
            (minhaJogada == "tesoura" && jogadaComputador == "papel") ||
            (minhaJogada == "papel" && jogadaComputador == "pedra")
        ) {
            resultadoTexto = "Jogador venceu!";
            minhasVitoriasContador++;
        }
        // Computador ganha
        if (
            (minhaJogada == "pedra" && jogadaComputador == "papel") ||
            (minhaJogada == "tesoura" && jogadaComputador == "pedra") ||
            (minhaJogada == "papel" && jogadaComputador == "tesoura")
        ) {
            resultadoTexto = "Computador venceu!";
            vitoriasComputadorContador++;
        }
        // Aumenta numero de rodadas
        quantidadeRodadasContador++;
        // Desmarca botoes
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].checked = false;
        }
        // Ajustando informações dos quadros
        quantidadeRodadas.textContent = quantidadeRodadasContador;
        minhasVitorias.textContent = minhasVitoriasContador;
        vitoriasComputador.textContent = vitoriasComputadorContador;
        empates.textContent = empatesContador;
        voceEscolheu.textContent = minhaJogada;
        computadorEscolheu.textContent = jogadaComputador;
        resultado.textContent = resultadoTexto;
        // Mostrar quadros
        jogoNaoIniciadoResumo.style.display = "none";
        jogoNaoIniciadoRodada.style.display = "none";
        quadroResumo.style.display = "block";
        quadroRodada.style.display = "block";
    } else {
        alert("Selecione uma opção para jogar!");
    }
});
