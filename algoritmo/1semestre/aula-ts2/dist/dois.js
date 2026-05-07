"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function analisarSenha(senha) {
    let pontuacao = 0;
    let classificacao;
    if (senha.length >= 8) {
        pontuacao++;
    }
    if (/[A-Z]/.test(senha)) {
        pontuacao++;
    }
    if (/[a-z]/.test(senha)) {
        pontuacao++;
    }
    if (/[0-9]/.test(senha)) {
        pontuacao++;
    }
    if (/[^a-zA-Z0-9]/.test(senha)) {
        pontuacao++;
    }
    if (pontuacao <= 2) {
        classificacao = "fraca";
    }
    else if (pontuacao == 3) {
        classificacao = "média";
    }
    else if (pontuacao == 4) {
        classificacao = "forte";
    }
    else {
        classificacao = "muito forte";
    }
    return { pontuacao, classificacao };
}
// Casos de teste:
const senhas = [
    "abc",
    "abcdefghi",
    "Abcdefghi",
    "Abc12345",
    "Abc123@#",
];
for (const senha of senhas) {
    const resultado = analisarSenha(senha);
    console.log(`Senha: ${senha}`);
    console.log(`Pontuação: ${resultado.pontuacao}`);
    console.log(`Classificação: ${resultado.classificacao}`);
    console.log("-----------------------------");
}
//# sourceMappingURL=dois.js.map