function media() {
    let soma = 0;
    let quantidade = 0;
    let entrada = prompt("Digite um número ou 'fim' para encerrar:");

    while (entrada.toLowerCase() !== "fim") {
        var numero = parseFloat(entrada);

        if (!isNaN(numero)) {
            soma += numero;
            quantidade++;
        } else {
            alert("Digite um numero valida . Digite um número ou 'fim'.");
        }

        entrada = prompt("Digite outro número valido ou 'fim' para encerrar:");
    }

    if (quantidade > 0) {
        var media = soma / quantidade;
        document.write("Média dos " + quantidade + " números: " + media.toFixed(2));
    } else {
        document.write("Nenhum número válido foi inserido.");
    }
}