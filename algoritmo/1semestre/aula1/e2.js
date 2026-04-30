const prompt = require("prompt-sync")({ sigint: true });

comando = prompt("insira o comando: ");

if (comando == "login") {
  email = prompt("insira seu email: ");
  nome = prompt("insira seu nome: ");
  idade = prompt("insira sua idade: ");
} else {
  console.log("comando invalido");
}

comando = prompt("insira o comando: ");

if (comando == "info") {
  console.log(email);
  console.log(nome);
  console.log(idade);
} else {
  console.log("comando invalido");
}

if (email == "") {
  console.log("você não tem login registrado");
}
