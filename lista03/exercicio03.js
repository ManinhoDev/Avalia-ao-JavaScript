
function raioValido() {

let raio = parseFloat(prompt("Informe o valor do raio do círculo:"));
let pi = 3.1415;
let area = pi * raio * raio;

alert("A área do círculo é: " + area);
}

//##############################################

function calcularSalario() {
let valorHora = parseFloat(prompt("Informe o valor da hora aula:"));
let horasTrabalhadas = parseFloat(prompt("Informe o número de horas trabalhadas no mês:"));
let percentualINSS = parseFloat(prompt("Informe o percentual de desconto do INSS (ex: 11 para 11%):"));

let salarioBruto = valorHora * horasTrabalhadas;
let descontoINSS = salarioBruto * (percentualINSS / 100);
let salarioLiquido = salarioBruto - descontoINSS;
alert("O salário líquido é: R$ " + salarioLiquido.toFixed(2));

}

//##############################################

function acrescimo() {
let valor1 = parseFloat(prompt("Informe o primeiro valor:"));
let valor2 = parseFloat(prompt("Informe o segundo valor:"));

let valor1ComAumento = valor1 + (valor1 * 0.30);

let valor2ComDesconto = valor2 - (valor2 * 0.25);

alert("Primeiro valor com acréscimo de 30%: " + valor1ComAumento.toFixed(2));
alert("Segundo valor com desconto de 25%: " + valor2ComDesconto.toFixed(2));
}

//##############################################

function mediaPonderada() {
let num1 = parseFloat(prompt("Informe o 1º número:"));
let num2 = parseFloat(prompt("Informe o 2º número:"));
let num3 = parseFloat(prompt("Informe o 3º número:"));
let num4 = parseFloat(prompt("Informe o 4º número:"));

let peso1 = 1;
let peso2 = 2;
let peso3 = 3;
let peso4 = 4;

let somaPesos = peso1 + peso2 + peso3 + peso4;
let mediaPonderada = (
  (num1 * peso1) + 
  (num2 * peso2) + 
  (num3 * peso3) + 
  (num4 * peso4)
) / somaPesos;

alert("A média ponderada é: " + mediaPonderada.toFixed(2));
}

//##############################################

function calcularVolume() {
    let raio = parseFloat(prompt("Informe o raio da lata de óleo:"));
let altura = parseFloat(prompt("Informe a altura da lata de óleo:"));

// Define o valor de π
let pi = 3.14159265;

// Calcula o volume: v = π * r² * h
let volume = pi * raio * raio * altura;

// Exibe o resultado
alert("O volume da lata de óleo é: " + volume.toFixed(2));

}

//##############################################
function trocarValores() {

let a = prompt("Digite o valor de a:");
let b = prompt("Digite o valor de b:");

        alert(`Valores trocados: valor A = ${b}  e valor B = ${a}, `);
   
}   

//##############################################

function hipotenusa() {
    let cateto1 = parseFloat(prompt("Digite o valor do primeiro cateto:"));
let cateto2 = parseFloat(prompt("Digite o valor do segundo cateto:"));
let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

alert("A hipotenusa do triângulo é: " + hipotenusa.toFixed(2));


}
//##############################################

function baseRetangulo() {

    let base = parseFloat(prompt("Digite a base do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));
let perimetro = 2 * (base + altura);
let area = base * altura;
let diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

alert("Perímetro: " + perimetro.toFixed(2) +
      "\nÁrea: " + area.toFixed(2) +
      "\nDiagonal: " + diagonal.toFixed(2));
}

//##############################################


function RazaoPa() {
    let razao = parseFloat(prompt("Digite a razão da PA:"));
    let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA:"));
    let decimoTermo = primeiroTermo + (10 - 1) * razao;

alert("O 10º termo da PA é: " + decimoTermo.toFixed(2));
}

//##############################################

function RazaoPg() {
    let razao = parseFloat(prompt("Digite a razão da PG:"));
    let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PG:"));
    let quintoTermo = primeiroTermo * Math.pow(razao, 5 - 1);
alert("O 5º termo da PG é: " + quintoTermo.toFixed(2));
}

//##############################################