prompt = require("prompt-sync")();

entrada = prompt("digite um numero: ");
// parseInt converte em número inteiro
limite = parseInt(entrada);
i = 0;

while (i < limite) {
  console.log(i);
  i = i + 1;
}
console.log("fim");
