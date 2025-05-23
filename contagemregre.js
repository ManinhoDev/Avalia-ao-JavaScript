
function contadorRegressivo() {
    let num = Number(prompt("Digite um número maior que zero:"));

    if (!Number.isInteger(num) || num <= 0) {
        document.writeln("Número inválido!");
        return;
    }

    document.writeln("Contagem regressiva:<br>");
    while (num >= 0) {
        document.writeln(num + "<br>");
        num--;
    }
}