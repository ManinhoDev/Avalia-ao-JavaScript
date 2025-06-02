

function gorjeta() {
    let valor = Number(prompt("Digite o valor da conta:"));
    let gorjeta = valor * 0.1;
    let total = valor + gorjeta;
    alert(`Gorjeta: R$ ${gorjeta.toFixed(2)}\nTotal: R$ ${total.toFixed(2)}`);
}

// ####################################################


function tempoRestante() {
    let horas = Number(prompt("Digite as  horas atuais :"));
    let minutos = Number(prompt("Digite as  minutos atuais :"));
    let minutosPassados = (horas * 60) - minutos;
    let totalMinutos = 24 * 60; 
    alert(`Tempo passados : ${totalMinutos - minutosPassados} minutos`);
}

// ####################################################

function peso() {
    let peso = Number(prompt("Digite o seu peso em kg:"));
    let altura = Number(prompt("Digite a sua altura em metros:"));
    let pesoemgrama = peso * 1000;
    let alturaemcentimetros = altura * 100;
    alert(`Peso em gramas: ${pesoemgrama} g\nAltura em centímetros: ${alturaemcentimetros} cm`);
}

// ####################################################

function imc() {
    let peso = Number(prompt("Digite o seu peso em kg:"));
    let altura = Number(prompt("Digite a sua altura em metros:"));
    let imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
}

// ####################################################

function calculadora() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let restoDivisao = num1 % num2;


   alert(`Resultados:\nSoma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nResto da Divisão: ${restoDivisao} `);
}
   
// ####################################################

function comissao() {
    let nome = prompt("Digite o nome do vendedor:");
    let vendas = Number(prompt("Digite o valor total das vendas:"));
    let comissao = vendas * 0.15;
    alert(`O vendedor ${nome} receberá uma comissão de: R$ ${comissao.toFixed(2)}`);
}

// ####################################################

function compraParcelada() { 
let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
let numPrestacoes = parseInt(prompt("Digite o número de prestações (máximo 10):"));
if (numPrestacoes > 0 && numPrestacoes <= 10) {
    let valorPrestacao = valorCompra / numPrestacoes;
    alert("Cada prestação será de: R$ " + valorPrestacao.toFixed(2));
} else {
    alert("Número de prestações inválido. Digite um valor entre 1 e 10.");
}}

// ####################################################

function precoAcrescimo() { 
    let precoCusto = parseFloat(prompt("Digite o preço de custo do produto:"));
let percentualAcrescimo = parseFloat(prompt("Digite o percentual de acréscimo (%):"));
let valorAcrescimo = precoCusto * (percentualAcrescimo / 100);
let precoVenda = precoCusto + valorAcrescimo;
alert("O valor de venda do produto é: R$ " + precoVenda.toFixed(2));

}
// ####################################################

function idade() {
let anos = parseInt(prompt("Digite a idade em anos:"));
let meses = parseInt(prompt("Digite os meses adicionais:"));
let dias = parseInt(prompt("Digite os dias adicionais:"));
let totalDias = (anos * 365) + (meses * 30) + dias;
alert("A idade total em dias é: " + totalDias);
}

// ####################################################

function votos() {
let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

let percBrancos = (votosBrancos / totalEleitores) * 100;
let percNulos = (votosNulos / totalEleitores) * 100;
let percValidos = (votosValidos / totalEleitores) * 100;

alert(
  "Percentual de votos brancos: " + percBrancos.toFixed(2) + "%" +
  "\nPercentual de votos nulos: " + percNulos.toFixed(2) + "%" +
  "\nPercentual de votos válidos: " + percValidos.toFixed(2) + "%"
);   `Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`
}
// ####################################################
