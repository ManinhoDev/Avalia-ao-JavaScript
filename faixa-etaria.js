
function Faixaetaria() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (isNaN(idade)) {
        document.writeln("Idade inválida. digite um número.");
        return;
    }

    var classificacao;

    if (idade <= 12) {
        classificacao = "Criança";
    } else if (idade >= 13 && idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        classificacao = "Adulto";
    } else if (idade >= 60) {
        classificacao = "Idoso";
    } else {
        classificacao = "Valor de idade não reconhecido.";
    }

    document.writeln("Classificação: " + classificacao);
}
