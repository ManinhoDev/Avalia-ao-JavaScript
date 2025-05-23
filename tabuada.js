


function tabuadaPersonalizada() {
    var numeroBase = parseInt(prompt("Digite o número base da tabuada:"));
    var numeroFinal = parseInt(prompt("Digite até que número deseja multiplicar:"));

    if (isNaN(numeroBase) || isNaN(numeroFinal)) {
        document.write("Erro: informe apenas números válidos.");
        return;
    }

    document.write("<h3>Tabuada do " + numeroBase + " até " + numeroFinal + ":</h3>");

    for (var i = 1; i <= numeroFinal; i++) {
        var resultado = numeroBase * i;
        document.write(numeroBase + " x " + i + " = " + resultado + "<br>");
    }
}