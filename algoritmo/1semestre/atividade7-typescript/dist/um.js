"use strict";
// Função adicionarFrase(frases, novaFrase)
//  adicionar novaFrase ao final de frases
// FimFunção
// Função removerFrase(frases, indice)
//  Se indice < 0 ou indice >= tamanho(frases) então
//  retornar falso
//  FimSe
//  remover frase na posição indice
//  retornar verdadeiro
// FimFunção
// Função buscarFrases(frases, palavra)
//  resultado <- lista vazia
//  Para cada frase em frases faça
//  Se frase contém palavra então
//  adicionar frase em resultado
//  FimSe
//  FimPara
//  retornar resultado
// FimFunção
// Função fraseAleatoria(frases)
//  indice <- número aleatório entre 0 e tamanho(frases) - 1
//  retornar frases[indice]
// FimFunção
// Função listarFrases(frases)
//  Se tamanho(frases) = 0 então
//  escrever "Nenhuma frase cadastrada"
//  retornar
//  FimSe
//  Para i de 0 até tamanho(frases) - 1 faça
//  escrever i, frases[i]
//  FimPara
// FimFunção
Object.defineProperty(exports, "__esModule", { value: true });
function adicionarFrase(frases, novaFrase) {
    frases.push(novaFrase);
}
function removerFrase(frases, indice) {
    if (indice < 0 || indice >= frases.length) {
        return false;
    }
    else {
        frases.splice(indice, 1);
        return true;
    }
}
function buscarFrases(frases, palavra) {
    let resultado = [];
    for (const frase of frases) {
        if (frase.includes(palavra)) {
            resultado.push(palavra);
        }
    }
    return resultado;
}
function fraseAleatoria(frases) {
    let indice = Math.floor(Math.random() * frases.length) - 1;
    return frases[indice];
}
function listarFrases(frases) {
    if (frases.length == 0) {
        console.log("Nenhuma frase cadastrada");
        return;
    }
    for (let i = 0; i < frases.length; i++) {
        console.log(i, frases[i]);
    }
}
// Dados de teste
const frases = [
    "A persistência realiza o impossível.",
    "O sucesso é a soma de pequenos esforços diários.",
    "Nunca é tarde para aprender algo novo.",
    "A disciplina supera a motivação.",
    "Grandes resultados exigem constância.",
];
listarFrases(frases);
console.log("-----------------------------");
adicionarFrase(frases, "O conhecimento transforma realidades.");
console.log("Frase adicionada.");
listarFrases(frases);
console.log("-----------------------------");
const removeu = removerFrase(frases, 2);
if (removeu) {
    console.log("Frase removida com sucesso.");
}
else {
    console.log("Índice inválido.");
}
listarFrases(frases);
console.log("-----------------------------");
const busca = buscarFrases(frases, "sucesso");
console.log("Resultado da busca:");
if (busca.length === 0) {
    console.log("Nenhuma frase encontrada.");
}
else {
    for (const frase of busca) {
        console.log(frase);
    }
}
console.log("-----------------------------");
const fraseSorteada = fraseAleatoria(frases);
if (fraseSorteada !== null) {
    console.log("Frase aleatória:");
    console.log(fraseSorteada);
}
//# sourceMappingURL=um.js.map