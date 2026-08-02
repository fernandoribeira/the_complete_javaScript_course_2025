"use strict";

// Variaveis DOM
const variaveisDom = {
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
    opcoes: ["pedra", "papel", "tesoura"],
    minhaJogada: "",
    jogadaComputador: "",
    resultado: "",
};

// Funcoes
const limpaVariaveisComuns = () => {
    variaveisComuns.quantidadeRodadasContador = 0;
    variaveisComuns.minhasVitoriasContador = 0;
    variaveisComuns.vitoriasComputadorContador = 0;
    variaveisComuns.empatesContador = 0;
};

const limpaBotoes = () => {
    for (let i = 0; i < variaveisDom.botoes.length; i++) {
        variaveisDom.botoes[i].checked = false;
    }
};

const limpaQuadros = () => {
    variaveisDom.quantidadeRodadas.textContent = "";
    variaveisDom.minhasVitorias.textContent = "";
    variaveisDom.vitoriasComputador.textContent = "";
    variaveisDom.empates.textContent = "";
    variaveisDom.voceEscolheu.textContent = "";
    variaveisDom.computadorEscolheu.textContent = "";
    variaveisDom.resultado.textContent = "";
    variaveisDom.jogoNaoIniciadoResumo.style.display = "block";
    variaveisDom.jogoNaoIniciadoRodada.style.display = "block";
    variaveisDom.quadroResumo.style.display = "none";
    variaveisDom.quadroRodada.style.display = "none";
};

const mostraQuadros = () => {
    variaveisDom.jogoNaoIniciadoResumo.style.display = "none";
    variaveisDom.jogoNaoIniciadoRodada.style.display = "none";
    variaveisDom.quadroResumo.style.display = "block";
    variaveisDom.quadroRodada.style.display = "block";
};

const aumentaNumeroRodadas = () => {
    variaveisComuns.quantidadeRodadasContador++;
};

const obterMinhaJogada = () => {
    for (let i = 0; i < variaveisDom.botoes.length; i++) {
        if (variaveisDom.botoes[i].checked) {
            return variaveisDom.botoes[i].value;
        }
    }
};

const criarJogadaComputador = () => {
    return variaveisComuns.opcoes[Math.trunc(Math.random() * variaveisComuns.opcoes.length)];
};

const comparaJogadas = () => {
    // Empate
    if (
        (variaveisComuns.minhaJogada == "pedra" && variaveisComuns.jogadaComputador == "pedra") ||
        (variaveisComuns.minhaJogada == "papel" && variaveisComuns.jogadaComputador == "papel") ||
        (variaveisComuns.minhaJogada == "tesoura" && variaveisComuns.jogadaComputador == "tesoura")
    ) {
        variaveisComuns.empatesContador++;
        return "Empate!";
    } else if (
        (variaveisComuns.minhaJogada == "pedra" && variaveisComuns.jogadaComputador == "tesoura") ||
        (variaveisComuns.minhaJogada == "tesoura" && variaveisComuns.jogadaComputador == "papel") ||
        (variaveisComuns.minhaJogada == "papel" && variaveisComuns.jogadaComputador == "pedra")
    ) {
        variaveisComuns.minhasVitoriasContador++;
        return "Jogador venceu!";
    } else if (
        (variaveisComuns.minhaJogada == "pedra" && variaveisComuns.jogadaComputador == "papel") ||
        (variaveisComuns.minhaJogada == "tesoura" && variaveisComuns.jogadaComputador == "pedra") ||
        (variaveisComuns.minhaJogada == "papel" && variaveisComuns.jogadaComputador == "tesoura")
    ) {
        variaveisComuns.vitoriasComputadorContador++;
        return "Computador venceu!";
    }
};

const ajustaInformacaoQuadros = () => {
    variaveisDom.quantidadeRodadas.textContent = variaveisComuns.quantidadeRodadasContador;
    variaveisDom.minhasVitorias.textContent = variaveisComuns.minhasVitoriasContador;
    variaveisDom.vitoriasComputador.textContent = variaveisComuns.vitoriasComputadorContador;
    variaveisDom.empates.textContent = variaveisComuns.empatesContador;
    variaveisDom.voceEscolheu.textContent = variaveisComuns.minhaJogada;
    variaveisDom.computadorEscolheu.textContent = variaveisComuns.jogadaComputador;
    variaveisDom.resultado.textContent = variaveisComuns.resultado;
};

const alertaErro = () => {
    alert("Selecione uma opção para jogar!");
};

// Evento botao reset
variaveisDom.reset.addEventListener("click", () => {
    limpaVariaveisComuns(variaveisComuns);
    limpaBotoes(variaveisDom);
    limpaQuadros(variaveisDom);
});

// Evento botao jogar
variaveisDom.jogar.addEventListener("click", () => {
    variaveisComuns.minhaJogada = obterMinhaJogada(variaveisDom);
    if (variaveisComuns.minhaJogada) {
        variaveisComuns.jogadaComputador = criarJogadaComputador(variaveisComuns);
        variaveisComuns.resultado = comparaJogadas(variaveisComuns);
        aumentaNumeroRodadas(variaveisComuns);
        limpaBotoes(variaveisDom);
        ajustaInformacaoQuadros(variaveisDom, variaveisComuns);
        mostraQuadros(variaveisDom);
    } else {
        alertaErro();
    }
});
