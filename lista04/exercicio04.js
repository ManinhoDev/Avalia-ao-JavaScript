
function metade() {
  let n1 = Number(prompt("Digite um número:"));
  resultado = n1 / 2; 
    if (n1 > 20) 
        alert("O número é maior que 20, o resultado é: " + resultado);
}


//####################################

function capital(){
let resposta = prompt("Qual é a capital do Brasil?");
if (resposta.toLowerCase() === "brasília" || resposta.toLowerCase() === "brasilia") {
    alert("Resposta certa! ");
} else {
    alert("Resposta errada! A capital do Brasil é Brasília.");
}

}
//####################################

function parOuImpar() {
    let n1 = Number(prompt("Digite um número:"));
    if (n1 % 2 === 0) {
        alert("O número " + n1 + " é par.");
    } else {
        alert("O número " + n1 + " é ímpar.");
    }
    }
//####################################

function divisivel() {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero % 4 === 0 && numero % 5 === 0) {
        alert("O número " + numero + " é divisível por 4 e 5.");
    } else {
        alert("Valor não é divisível por 4 e 5.");
    }
}

//####################################

function media() {
let nota1 = parseFloat(prompt("Digite a 1ª nota:"));
let nota2 = parseFloat(prompt("Digite a 2ª nota:"));
let nota3 = parseFloat(prompt("Digite a 3ª nota:"));
let nota4 = parseFloat(prompt("Digite a 4ª nota:"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 5) {
    alert("Aluno aprovado! Média: " + media.toFixed(2));
} else {
    alert("Aluno reprovado. Média: " + media.toFixed(2));
}}

//####################################  

function diferencaValor(){
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

let diferenca = Math.abs(num1 - num2);

alert("A diferença entre o maior e o menor valor é: " + diferenca);
}

//####################################

function numpositivo() {
let num = parseInt(prompt("Digite um número inteiro (positivo ou negativo):"));
let modulo = (num < 0) ? -num : num;
alert("O módulo do número é: " + modulo);

}

//####################################
function contador() {
    let num = parseInt(prompt("Digite um número inteiro qualquer:"));

if (num >= 1 && num <= 10) {
  alert("O número está na faixa de 1 a 10.");
} else {
  alert("O número NÃO está na faixa de 1 a 10.");
}
}

function numNulo() {
    let num = parseFloat(prompt("Digite um número:"));

if (num > 0) {
  alert("O número é positivo.");
} else if (num < 0) {
  alert("O número é negativo.");
} else {
  alert("O número é zero.");
}
}

//  ####################################

function divisor() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (num2 !== 0 && num1 % num2 === 0) {
  alert(num2 + " é divisor de " + num1 + ".");
} else if (num2 === 0) {
  alert("Divisão por zero não é permitida.");
} else {
  alert(num2 + " não é divisor de " + num1 + ".");
}
}
//####################################

function casaCentena() {
let num = parseInt(prompt("Digite um número de 3 dígitos:"));
let centenas = Math.floor(num / 100);
alert("O algarismo das centenas é: " + centenas);
}

//####################################

function maioNum() {
    let numeros = [];

for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
  numeros.push(num);
}

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

alert(`Maior número: ${maior}\nMenor número: ${menor}`);
}


//####################################

function ordemCrescente() {
    let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));

let valores = [a, b, c];
valores.sort(function(x, y) {
  return x - y;
});

alert("Valores em ordem crescente: " + valores.join(", "));
}

//####################################







