import promptSync from "prompt-sync";
const prompt = promptSync();
const filaNormal = [];
const filaPreferencial = [];
let proximoAtendimentoPreferencial = false;
let opcao = 99;
while (opcao !== 0) {
    console.log("\n=== Gerenciador de filas ===\n1 - Cadastrar cliente\n2 - Atender cliente\n3 - Listar filas\n0 - Sair");
    opcao = Number(prompt("Opção: "));
    if (opcao === 1) {
        criarCliente();
    }
    else if (opcao === 2) {
        atenderCliente();
    }
    else if (opcao === 3) {
        exibirFilas();
    }
    else if (opcao === 0) {
        console.log("\nSistema encerrado");
    }
    else {
        console.log("\nOpção inválida");
    }
}
function criarCliente() {
    const nome = prompt("Nome: ");
    const idade = prompt("Idade: ");
    const gestante = prompt("Gestante (s/n): ");
    const cliente = {
        nome: nome.trim(),
        idade: Number(idade.trim()),
        gestante: gestante.trim() === "s",
    };
    if (cliente.idade >= 60 || cliente.gestante === true) {
        filaPreferencial.push(cliente);
        console.log("\nFila Preferencial");
    }
    else {
        filaNormal.push(cliente);
        console.log("\nFila Normal");
    }
}
function atenderCliente() {
    if (filaNormal.length === 0 && filaPreferencial.length === 0) {
        console.log("\nNão ha clientes cadastrados");
    }
    else {
        if (filaNormal.length === 0) {
            console.log(`\n Cliente atendido: ${filaPreferencial[0]?.nome}`);
            filaPreferencial.shift();
            proximoAtendimentoPreferencial = false;
        }
        else {
            if (filaPreferencial.length === 0) {
                console.log(`\n Cliente atendido: ${filaNormal[0]?.nome}`);
                filaNormal.shift();
                proximoAtendimentoPreferencial = true;
            }
            else {
                if (proximoAtendimentoPreferencial === true) {
                    console.log(`\n Cliente atendido: ${filaPreferencial[0]?.nome}`);
                    filaPreferencial.shift();
                    proximoAtendimentoPreferencial = false;
                }
                else {
                    console.log(`\n Cliente atendido: ${filaNormal[0]?.nome}`);
                    filaNormal.shift();
                    proximoAtendimentoPreferencial = true;
                }
            }
        }
    }
}
function exibirFilas() {
    console.log("\nFila Comum: ");
    for (let i = 0; i < filaNormal.length; i++) {
        console.log(`${i + 1} - ${filaNormal[i]?.nome}`);
    }
    console.log("\nFila Preferencial: ");
    for (let i = 0; i < filaPreferencial.length; i++) {
        console.log(`${i + 1} - ${filaPreferencial[i]?.nome}`);
    }
}
//# sourceMappingURL=index.js.map