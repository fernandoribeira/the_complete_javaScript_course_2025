"use strict";

// Variaveis DOM
const dom = {
    botoes: document.querySelectorAll("input[type=radio]"),
    jogar: document.querySelector(".jogar"),
    quadroResumo: document.querySelector(".quadroResumo"),
    jogoNaoIniciadoResumo: document.querySelector(".jogoNaoIniciadoResumo"),
    quadroRodada: document.querySelector(".quadroRodada"),
    jogoNaoIniciadoRodada: document.querySelector(".jogoNaoIniciadoRodada"),
    quantidadeRodadas: document.querySelector(".quantidadeRodadas"),
    minhasVitorias: document.querySelector(".minhasVitorias"),
    vitoriasComputador: document.querySelector(".vitoriasComputador"),
    empates: document.querySelector(".empates"),
    voceEscolheu: document.querySelector(".voceEscolheu"),
    computadorEscolheu: document.querySelector(".computadorEscolheu"),
    resultado: document.querySelector(".resultado"),
    reset: document.querySelector(".reset"),
};

// Variaveis comuns
const variaveisComuns = {
    quantidadeRodadasContador: 0,
    minhasVitoriasContador: 0,
    vitoriasComputadorContador: 0,
    empatesContador: 0,
};

// Funcoes
function limpaVariaveis(variaveisComuns) {
    variaveisComuns.quantidadeRodadasContador = 0;
    variaveisComuns.minhasVitoriasContador = 0;
    variaveisComuns.vitoriasComputadorContador = 0;
    variaveisComuns.empatesContador = 0;
}

function limpaBotoes(dom) {
    for (let i = 0; i < dom.botoes.length; i++) {
        dom.botoes[i].checked = false;
    }
}

function limpaQuadros(dom) {
    dom.quantidadeRodadas.textContent = "";
    dom.minhasVitorias.textContent = "";
    dom.vitoriasComputador.textContent = "";
    dom.empates.textContent = "";
    dom.voceEscolheu.textContent = "";
    dom.computadorEscolheu.textContent = "";
    dom.resultado.textContent = "";
    dom.jogoNaoIniciadoResumo.style.display = "block";
    dom.jogoNaoIniciadoRodada.style.display = "block";
    dom.quadroResumo.style.display = "none";
    dom.quadroRodada.style.display = "none";
}

// Le status dos botoes
function statusBotoes() {
    let minhaJogada;
    for (let i = 0; i < dom.botoes.length; i++) {
        if (dom.botoes[i].checked) {
            minhaJogada = dom.botoes[i].value;
        }
    }
    return minhaJogada;
}

// Reset de jogo
dom.reset.addEventListener("click", () => {
    limpaVariaveis(variaveisComuns);
    limpaBotoes(dom);
    limpaQuadros(dom);
});

// Logica do botao Jogar
dom.jogar.addEventListener("click", () => {
    // Capturando minha jogada
    let minhaJogada = statusBotoes();
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
            variaveisComuns.empatesContador++;
        }
        // Jogador ganha
        if (
            (minhaJogada == "pedra" && jogadaComputador == "tesoura") ||
            (minhaJogada == "tesoura" && jogadaComputador == "papel") ||
            (minhaJogada == "papel" && jogadaComputador == "pedra")
        ) {
            resultadoTexto = "Jogador venceu!";
            variaveisComuns.minhasVitoriasContador++;
        }
        // Computador ganha
        if (
            (minhaJogada == "pedra" && jogadaComputador == "papel") ||
            (minhaJogada == "tesoura" && jogadaComputador == "pedra") ||
            (minhaJogada == "papel" && jogadaComputador == "tesoura")
        ) {
            resultadoTexto = "Computador venceu!";
            variaveisComuns.vitoriasComputadorContador++;
        }
        // Aumenta numero de rodadas
        variaveisComuns.quantidadeRodadasContador++;
        // Desmarca botoes
        for (let i = 0; i < dom.botoes.length; i++) {
            dom.botoes[i].checked = false;
        }
        // Ajustando informações dos quadros
        dom.quantidadeRodadas.textContent = variaveisComuns.quantidadeRodadasContador;
        dom.minhasVitorias.textContent = variaveisComuns.minhasVitoriasContador;
        dom.vitoriasComputador.textContent = variaveisComuns.vitoriasComputadorContador;
        dom.empates.textContent = variaveisComuns.empatesContador;
        dom.voceEscolheu.textContent = minhaJogada;
        dom.computadorEscolheu.textContent = jogadaComputador;
        dom.resultado.textContent = resultadoTexto;
        // Mostrar quadros
        dom.jogoNaoIniciadoResumo.style.display = "none";
        dom.jogoNaoIniciadoRodada.style.display = "none";
        dom.quadroResumo.style.display = "block";
        dom.quadroRodada.style.display = "block";
    } else {
        alert("Selecione uma opção para jogar!");
    }
});
