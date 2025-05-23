




function validaSenha() {
    var senhaCorreta = "12345";
    var tentativas = 0;
    var senha;

    while (tentativas < 3) {
        senha = prompt("Digite a senha:");
        
        if (senha === senhaCorreta) {
            document.writeln(" Acesso permitido");
            return;
        } else {
            alert(" Senha incorreta. Tentativas restantes: " + (2 - tentativas));
            tentativas++;
        }
    }

    document.writeln(" Acesso bloqueado. Número de tentativas excedido.");
}