



    function calculadoraAvancada() {

    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let operacao = prompt("Digite a operação desejada (+, -, *, /, %, **):");

    let resultado;

    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao === "-") {
        resultado = numero1 - numero2;
    } else if (operacao === "*") {
        resultado = numero1 * numero2;
    } else if (operacao === "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            document.write("Erro: divisão por zero não é permitida.");
            return;
        }
    } else if (operacao === "%") {
        resultado = numero1 % numero2;
    } else if (operacao === "**") {
        resultado = numero1 ** numero2;
    } else {
        document.write("Operação inválida.");
        return;
    }

    document.write("O resultado de " + numero1 + " " + operacao + " " + numero2 + " é: " + resultado);
}
