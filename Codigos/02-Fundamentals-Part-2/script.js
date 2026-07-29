// Strict mode

"use strict";

// Escrevendo no console

console.log("Teste final");
console.log();

// Variaveis

let nome = "Fernando";
let idade = 47;
console.log(nome);
console.log(idade);
// nome = "Ribeira";
// idade = 49;
// console.log(nome);
// console.log(idade);
const PI = 3.1415;
console.log(PI);
console.log();

// Tipagem dinamica

let variavel = "Texto";
console.log(variavel);
variavel = 20;
console.log(variavel);
console.log();

// Tipos de dados

let varNumber = 12;
let varString = "Teste";
let varBoolean = true;
let varUndefined = undefined;
let varNull = null;
let varBigint = 9007199254740991n;
let varObject = {
    nome: "Maria",
    idade: 25,
    falar() {
        console.log("Olá!");
    },
};

console.log(varNumber + " e do tipo " + typeof varNumber);
console.log(varString + " e do tipo " + typeof varString);
console.log(varBoolean + " e do tipo " + typeof varBoolean);
console.log(varUndefined + " e do tipo " + typeof varUndefined);
console.log(varNull + " e do tipo " + typeof varNull);
console.log(varBigint + " e do tipo " + typeof varBigint);
console.log(varObject + " e do tipo " + typeof varObject);
console.log();

// Comentários

// Comentário de uma linha:

/*
Comentário
com várias linhas
*/
console.log();

// Operadores

let numero1 = 10;
let numero2 = 5;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);
console.log();

let numero3 = 10;
numero3 += 1;
console.log(numero3);
numero3 -= 2;
console.log(numero3);
numero3 *= 3;
console.log(numero3);
numero3 /= 4;
console.log(numero3);
numero3 %= 5;
console.log(numero3);
numero3 **= 2;
console.log(numero3);
console.log();

let numero4 = 5;
console.log(numero4++);
console.log(numero4);
console.log(numero4--);
console.log(numero4);
console.log();
console.log(++numero4);
console.log(numero4);
console.log(--numero4);
console.log(numero4);
console.log();

let numero5 = 10;
let numero6 = "10";
let numero7 = 15;
console.log(numero5 == numero6 ? "Igual" : "Diferente");
console.log(numero5 === numero6 ? "Igual Estrito" : "Diferente");
console.log(numero5 != numero7 ? "Diferente" : "Igual");
console.log(numero5 !== numero7 ? "Diferente" : "Igual Estrito");
console.log(numero5 > numero7 ? "Maior" : "Menor Igual");
console.log(numero5 < numero7 ? "Menor" : "Maior Igual");
console.log(numero5 >= numero7 ? "Maior Igual" : "Menor");
console.log(numero5 <= numero7 ? "Menor Igual" : "Maior");
console.log();

// Ordem dos Operadores

console.log(5 + 2 * 3); // Resultado: 11 (precedência normal)
console.log((5 + 2) * 3); // Resultado: 21 (parênteses alteram a precedência)
console.log();

// Template literals

const variavelNome = "Fernando";
console.log("Meu nome é " + variavelNome);
console.log(`Meu nome é ${variavelNome}`);
console.log();

// Estruturas de decisão

idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
}
console.log();

idade = 16;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
console.log();

let nota = 7;
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
console.log();

let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Dia inválido");
}
console.log();

idade = 20;
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);
console.log();

// Conversão de Tipos (explicita)

let conversao1 = Number("10");
console.log(typeof conversao1);
let conversao2 = parseInt("10.9");
console.log(typeof conversao2);
let conversao3 = parseFloat("10.5");
console.log(typeof conversao3);
let conversao4 = String(123);
console.log(typeof conversao4);
let conversao5 = (123).toString();
console.log(typeof conversao5);
let conversao6 = Boolean(0);
console.log(typeof conversao6);
console.log();

// Conversão de Tipos (implicita)

console.log("5" + 2); // "52"
console.log(2 + "5"); // "25"
console.log("5" + true); // "5true"
console.log("5" + null); // "5null"
console.log(2 + 2 + "5"); // "45"
console.log("5" + 2 + 2); // "522"
console.log("5" - 2); // 3
console.log("5" * "2"); // 10
console.log("10" / "2"); // 5
console.log("5" % 2); // 1
console.log();

// Valores "truthy" e "falsy"

let tf1 = false;
let tf2 = 0;
let tf3 = -0;
let tf4 = 0n;
let tf5 = "";
let tf6 = null;
let tf7 = undefined;
let tf8 = NaN;
let tf9 = "";
let tf10 = true;
let tf11 = 1;
let tf12 = -1;
let tf13 = "0";
let tf14 = "false";
let tf15 = " ";
let tf16 = [];
let tf17 = {};
let tf18 = function () {};
console.log(Boolean(tf1));
console.log(Boolean(tf2));
console.log(Boolean(tf3));
console.log(Boolean(tf4));
console.log(Boolean(tf5));
console.log(Boolean(tf6));
console.log(Boolean(tf7));
console.log(Boolean(tf8));
console.log(Boolean(tf9));
console.log(Boolean(tf10));
console.log(Boolean(tf11));
console.log(Boolean(tf12));
console.log(Boolean(tf13));
console.log(Boolean(tf14));
console.log(Boolean(tf15));
console.log(Boolean(tf16));
console.log(Boolean(tf17));
console.log(Boolean(tf18));
console.log();

// Operadores logicos

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);
console.log();

// Funções

const anoAtual = 2026;
const anoNascimento = 1979;

// Função tradicional (Function Declaration)

function logger1() {
    console.log("Teste");
}
logger1();

function idadeAtual1(anoAtual, anoNascimento) {
    const idadeAtual1 = anoAtual - anoNascimento;
    return idadeAtual1;
}
console.log(idadeAtual1(anoAtual, anoNascimento));

// Expressão de função (Function Expression)

const logger2 = function () {
    console.log("Teste");
};
logger2();

const idadeAtual2 = function (anoAtual, anoNascimento) {
    const idadeAtual2 = anoAtual - anoNascimento;
    return idadeAtual2;
};
console.log(idadeAtual2(anoAtual, anoNascimento));

// Função seta (Arrow function)

const logger3 = () => console.log("Teste");
logger3();

const idadeAtual3 = (anoAtual, anoNascimento) => {
    const idadeAtual3 = anoAtual - anoNascimento;
    return idadeAtual3;
};
console.log(idadeAtual3(anoAtual, anoNascimento));

console.log();

// Arrays

const carros = [];
const avioes = new Array();
const amigos = ["Bob", "Luiz", "Bolacha"];
const frutas = new Array("Banana", "Laranja", "Maça");
const diversos = [0, "Fernando", true, ["alface", "beterraba"]];
console.log(carros);
console.log(avioes);
console.log(amigos);
console.log(frutas);
console.log(diversos);
console.log();

const cores = ["azul", "verde", "vermelho", "amarelo"];
console.log(cores);
console.log(cores.length);
console.log(cores[0]);
console.log(cores[2]);
console.log(cores[cores.length - 1]);
cores.unshift("roxo");
console.log(cores);
cores.splice(2, 0, "marrom");
console.log(cores);
cores.push("laranja");
console.log(cores);
cores.shift();
console.log(cores);
cores.splice(2, 1);
console.log(cores);
cores.pop();
console.log(cores);
console.log(cores.includes("amarelo"));
console.log(cores.includes("roxo"));
console.log(cores.indexOf("amarelo"));
console.log(cores.indexOf("roxo"));
console.log();

// Objetos

const fernando = {
    nome: "Fernando",
    sobrenome: "Ribeira",
    idade: 2026 - 1979,
    amigos: ["Bolacha", "Minhoca"],
};
console.log(fernando);

console.log(fernando.nome);
console.log(fernando["sobrenome"]);

const jonas = {
    nome: "Jonas",
    dataNascimento: 1991,
    calculoIdade: function () {
        return 2026 - this.dataNascimento;
    },
};

console.log(jonas.calculoIdade());
console.log();

// Loops

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log();

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log();

i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
console.log();

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
console.log();

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
console.log();
