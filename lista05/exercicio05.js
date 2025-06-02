
function exibNum(){
    let numeros = "";
for (let i = 1; i <= 100; i++) {
  numeros += i + "\n";
}
alert(numeros);
}

// #############################

function nunDecrescente() {
let numeros = "";
for (let i = 100; i >= 1; i--) {
  numeros += i + "\n";
}
alert(numeros);
}

// #############################

function exibirQuadrados() {
    let mensagem = "";
for (let i = 15; i <= 200; i++) {
  mensagem += i + " ao quadrado é " + (i * i) + "\n";
}
alert(mensagem);
}
// #############################

function somaCem() {
    let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
alert("A soma dos 100 primeiros números inteiros é: " + soma);
}
// #############################    

function tabuadaMult() {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
}
 // #############################

 function multiploSucessivo() {
  let n = parseInt(prompt("Digite um número menor ou igual a 50:"));

if (n <= 50) {
  let resultado = n;
  let mensagem = "";

  while (resultado < 250) {
    mensagem += resultado + "\n";
    resultado *= 3;
  }

  alert("Resultados da multiplicação sucessiva:\n" + mensagem);
} else {
  alert("Número inválido! Digite um número menor ou igual a 50.");
}
 }

 // #############################

 function divisivelPorQuatro() {
  let i = 1;
let resultado = "";

while (i < 200) {
  if (i % 4 === 0) {
    resultado += i + "\n";
  }
  i++;
}

alert("Números divisíveis por 4 menores que 200:\n" + resultado);
 }

// #############################


