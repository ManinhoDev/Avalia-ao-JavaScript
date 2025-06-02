


function nome() {
    let nome = prompt("Digite sua nome:");
    let sexo = prompt("Digite seu sexo :");
    alert(`Dados pessoais: ${nome}, ${sexo}`);


}





function calcular() {
    let valor1 = parseInt(prompt("Digite sua primeiro  valor :"));
    let valor2 = parseInt(prompt("Digite sua segundo valor :"));
    let valor3 = parseInt(prompt("Digite sua terceiro valor :"));
    let valor4 = parseInt(prompt("Digite sua quarto valor :"));
    let soma = valor1 + valor2 + valor3 + valor4;
    alert(`A soma dos valores é: ${soma}`);

    let multiplicacao = valor1 * valor2 * valor3 * valor4;
    alert(`A multiplicação dos valores é: ${multiplicacao}`)
        ;

}





function converte() {
    let valor = parseFloat(prompt("Digite um valor em Dolar:"));
    let cotacao = parseFloat(prompt("Digite a cotação do Dolar:$ "));
    let valorConvertido = valor * cotacao;
    alert(`O valor convertido em Reais é: R$ ${valorConvertido}`);

}




function numerointeiro() {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    alert(`O antecessor do número ${numero} é: ${antecessor} e o seu sucessor é: ${sucessor}`);


}




function salario() {
    let salario = parseFloat(prompt("Digite o seu sálario:"));
    let aumento = salario * 0.15;
    let novoSalario = salario + aumento;
    alert(`O seu salário com aumento de 15% é: R$ ${novoSalario}`);
        

    }

function media(){
    let n1 = parseFloat(prompt("Digite o primeiro número: "))
    let n2 = parseFloat(prompt("Digite o segundo número: "))
    let n3 = parseFloat(prompt("Digite o terceiro número"))
    let total = n1 +n2 + n3
    let med = (total / 3 )
    alert (`A media dos valores digitado é :  ${med}`)

    }


    function temperatura(){
        let tempF = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))
        let tempC = ((tempF - 32) * (5 / 9))
        alert(`A temperatura Fahrenheit convertida em Celsius é : ${tempC}`)


    }


    function consumo(){
        let distancia = Number(prompt("Digite a distancia da viagem: " ));
        let consLt = Number(prompt("Digite o consumo do seu veiculo por KM "));
        let quantidade = (distancia / consLt);
        alert(`Seu veiculo gastara ,  ${quantidade} litros de combustivel  na viagem`);
}


function raiz(){
let nun1 = Number(prompt("Digite um número"));
let quadrado = (nun1 * nun1);
let raiz = Math.sqrt(nun1);

alert(`o numero digitado foi,  ${nun1} , o quadrado dele é : ${quadrado}, e sua raíz é : ${raiz}`);

}